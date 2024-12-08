import { configureStore } from '@reduxjs/toolkit';
import investmentReducer from './investimentSlice';

export const store = configureStore({
  reducer: {
    investment: investmentReducer,
  },
});