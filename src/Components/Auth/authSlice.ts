// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user?: { name?: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("isAuthenticated"),
  user: localStorage.getItem("isAuthenticated") ? { name: "Marwan" } : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      state.user = { name: "Marwan" };
      localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("isAuthenticated");
    },
    // optional: set user payload
    setUser(state, action: PayloadAction<{ name: string } | null>) {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
