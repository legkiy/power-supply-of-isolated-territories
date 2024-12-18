import { createSlice } from '@reduxjs/toolkit';

interface IGlobalState {
  navBarState: boolean;
  openDevPanel: boolean;
}

const InitState: IGlobalState = {
  navBarState: false,
  openDevPanel: false,
};

export const globalSclice = createSlice({
  name: 'global',
  initialState: InitState,
  reducers: {
    toggleNavBar: (state) => {
      state.navBarState = !state.navBarState;
    },
    toggleDevPanel: (state) => {
      state.openDevPanel = !state.openDevPanel;
    },
  },
});

export const { toggleNavBar } = globalSclice.actions;
export default globalSclice.reducer;
