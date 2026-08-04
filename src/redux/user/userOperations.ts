import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { UserData } from "./userSlice";

export interface AuthCredentials {
  email: string;
  password?: string;
}

type FirebaseAuthError = {
  code?: string;
  message?: string;
};

const getFirebaseAuthError = (error: unknown): FirebaseAuthError => {
  if (typeof error === "object" && error !== null) {
    return error as FirebaseAuthError;
  }
  return { message: String(error) };
};

export const loginWithEmail = createAsyncThunk<
  UserData,
  AuthCredentials,
  { rejectValue: string }
>("user/loginWithEmail", async ({ email, password }, { rejectWithValue }) => {
  try {
    if (!password) {
      return rejectWithValue("Будь ласка, введіть пароль.");
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (err: unknown) {
    const firebaseError = getFirebaseAuthError(err);
    if (
      firebaseError.code === "auth/invalid-credential" ||
      firebaseError.code === "auth/user-not-found" ||
      firebaseError.code === "auth/wrong-password"
    ) {
      return rejectWithValue("Невірний email або пароль.");
    } else if (firebaseError.code === "auth/invalid-email") {
      return rejectWithValue("Некоректний формат email.");
    } else {
      return rejectWithValue("Помилка входу: " + (firebaseError.message || String(err)));
    }
  }
});

export const registerWithEmail = createAsyncThunk<
  UserData,
  AuthCredentials,
  { rejectValue: string }
>("user/registerWithEmail", async ({ email, password }, { rejectWithValue }) => {
  try {
    if (!password) {
      return rejectWithValue("Будь ласка, вкажіть пароль для реєстрації.");
    }
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (err: unknown) {
    const firebaseError = getFirebaseAuthError(err);
    if (firebaseError.code === "auth/email-already-in-use") {
      return rejectWithValue("Користувач з таким email вже існує.");
    } else if (firebaseError.code === "auth/weak-password") {
      return rejectWithValue("Пароль має містити щонайменше 6 символів.");
    } else if (firebaseError.code === "auth/invalid-email") {
      return rejectWithValue("Некоректний формат email.");
    } else {
      return rejectWithValue("Помилка реєстрації: " + (firebaseError.message || String(err)));
    }
  }
});

export const loginWithGoogle = createAsyncThunk<
  UserData,
  void,
  { rejectValue: string }
>("user/loginWithGoogle", async (_, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  } catch (err: unknown) {
    const firebaseError = getFirebaseAuthError(err);
    return rejectWithValue("Помилка авторизації через Google: " + (firebaseError.message || String(err)));
  }
});

export const logoutUser = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("user/logoutUser", async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (err: unknown) {
    const firebaseError = getFirebaseAuthError(err);
    return rejectWithValue("Помилка виходу: " + (firebaseError.message || String(err)));
  }
});
