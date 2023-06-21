import { configureStore } from '@reduxjs/toolkit';
import chartDataSlice from './chartData/chartDataSlice';

export const store = configureStore({
  reducer: {
    chartData: chartDataSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
