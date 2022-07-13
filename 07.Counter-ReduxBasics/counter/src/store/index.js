import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStateCounter = {
  counter: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
  },
  initialState: initialStateCounter,
});

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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
