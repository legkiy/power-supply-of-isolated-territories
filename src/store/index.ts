import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import chartsDataSlice from './chartsDataSlice/chartsDataSlice';
import global, { globalSclice } from './global/globalSlice';
import { useMemo } from 'react';
import map, { mapSlice } from './mapSlice/mapSlice';

export const store = configureStore({
  reducer: {
    chartData: chartsDataSlice,
    global: global,
    map: map,
  },
});

const rootActions = { ...globalSclice.actions, ...mapSlice.actions };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispath = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispath), [dispath]);
};
