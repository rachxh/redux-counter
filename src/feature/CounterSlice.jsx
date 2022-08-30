import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducer: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAMount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment,incrementByAMount } = counterSlice.actions;

//getting a state for value
export const selectCount = (state) => state.counter.value;
//export const selectLoading = state => state.counter.isLoading;

export default counterSlice.reducer;
