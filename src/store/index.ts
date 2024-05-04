import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import chartsDataSlice from './chartsDataSlice/chartsDataSlice';
// import emissionsTypeSlice from './emissionsType/emissionsTypeSlice';

export const store = configureStore({
  reducer: {
    chartData: chartsDataSlice,
    // emissionsType: emissionsTypeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
