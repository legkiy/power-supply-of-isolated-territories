import { configureStore } from '@reduxjs/toolkit';
import chartDataSlice from './chartData/chartDataSlice';
import emissionsTypeSlice from './emissionsType/emissionsTypeSlice';

export const store = configureStore({
  reducer: {
    chartData: chartDataSlice,
    emissionsType: emissionsTypeSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
