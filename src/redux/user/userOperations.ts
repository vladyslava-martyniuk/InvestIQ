import {
    //createSlice,
     createAsyncThunk} from '@reduxjs/toolkit';
const LoginWithFirebase = createAsyncThunk('user/userLogin', async (credentials, ) => {
  try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Успішний вхід!");
    } catch (err: any) {
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setError("Невірний email або пароль.");
      } else if (err.code === "auth/invalid-email") {
        setError("Некоректний формат email.");
      } else {
        setError("Помилка входу: " + err.message);
      }
    } finally {
      setLoading(false);
    }
})
