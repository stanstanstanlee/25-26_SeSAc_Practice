import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByAmount: (state, action) => {
      state.count += Number(action.payload);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
