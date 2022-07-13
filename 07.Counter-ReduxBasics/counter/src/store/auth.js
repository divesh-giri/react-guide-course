import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  email: "",
  password: "",
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "authorization",
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  initialState: initialStateAuth,
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
