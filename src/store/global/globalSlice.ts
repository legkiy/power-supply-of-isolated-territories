import { createSlice } from '@reduxjs/toolkit';

interface IGlobalState {
  navBarState: boolean;
}

const InitState: IGlobalState = {
  navBarState: false,
};

export const globalSclice = createSlice({
  name: 'global',
  initialState: InitState,
  reducers: {
    toggleNavBar: (state) => {
      state.navBarState = !state.navBarState;
    },
  },
});

export const { toggleNavBar } = globalSclice.actions;
export default globalSclice.reducer;
