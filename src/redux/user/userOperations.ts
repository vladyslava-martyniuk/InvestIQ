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
  } catch (err: any) {
    if (
      err.code === "auth/invalid-credential" ||
      err.code === "auth/user-not-found" ||
      err.code === "auth/wrong-password"
    ) {
      return rejectWithValue("Невірний email або пароль.");
    } else if (err.code === "auth/invalid-email") {
      return rejectWithValue("Некоректний формат email.");
    } else {
      return rejectWithValue("Помилка входу: " + (err.message || err));
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
  } catch (err: any) {
    if (err.code === "auth/email-already-in-use") {
      return rejectWithValue("Користувач з таким email вже існує.");
    } else if (err.code === "auth/weak-password") {
      return rejectWithValue("Пароль має містити щонайменше 6 символів.");
    } else if (err.code === "auth/invalid-email") {
      return rejectWithValue("Некоректний формат email.");
    } else {
      return rejectWithValue("Помилка реєстрації: " + (err.message || err));
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
  } catch (err: any) {
    return rejectWithValue("Помилка авторизації через Google: " + (err.message || err));
  }
});

export const logoutUser = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("user/logoutUser", async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (err: any) {
    return rejectWithValue("Помилка виходу: " + (err.message || err));
  }
});
