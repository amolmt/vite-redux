import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type of our state
interface CounterState {
  value: number;
}

// initial value
const initialState: CounterState = {
  value: 0,
};

// slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
