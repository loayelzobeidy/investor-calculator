// redux/investmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialValue: 0,        // Initial investment value
  annualValue: 0,         // Annual investment value
  expectedValue: 0,       // Expected investment value
  durationValue: 0,       // Duration value
};

const investmentSlice = createSlice({
  name: 'investment',
  initialState,
  reducers: {
    setInitialValue: (state, action) => {
      state.initialValue = action.payload;
    },
    setAnnualValue: (state, action) => {
      state.annualValue = action.payload;
    },
    setExpectedValue: (state, action) => {
      state.expectedValue = action.payload;
    },
    setDurationValue: (state, action) => {
      state.durationValue = action.payload;
    }
  },
});

export const {
  setInitialValue,
  setAnnualValue,
  setExpectedValue,
  setDurationValue
} = investmentSlice.actions;

export default investmentSlice.reducer;
