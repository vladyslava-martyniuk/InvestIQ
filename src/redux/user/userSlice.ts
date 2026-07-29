import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loginWithEmail,
  registerWithEmail,
  loginWithGoogle,
  logoutUser,
} from "./userOperations";

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface UserState {
  user: UserData | null;
  isLoading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserData | null>) {
      state.user = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login with Email
      .addCase(loginWithEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.message = "Успішний вхід!";
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Register with Email
      .addCase(registerWithEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(registerWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.message = "Реєстрація успішна! Ви авторизовані.";
      })
      .addCase(registerWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Login with Google
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.message = "Успішний вхід через Google!";
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Logout User
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.message = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearError, clearMessage } = userSlice.actions;
export const userReducer = userSlice.reducer;
