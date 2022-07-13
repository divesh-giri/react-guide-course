import { createSlice } from "@reduxjs/toolkit";

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
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
