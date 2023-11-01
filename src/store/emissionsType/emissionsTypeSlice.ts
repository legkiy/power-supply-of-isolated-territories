import { createSlice } from '@reduxjs/toolkit';
import { FuelTypesType } from '../../components/Main/EmissionsChart/data/interface';

export interface IEmissionsTypeState {
  emissionsType: FuelTypesType;
}

const emissionsTypeState: IEmissionsTypeState = {
  emissionsType: 'уголь',
};

export const emissionsTypeSlice = createSlice({
  name: 'chartData',
  initialState: emissionsTypeState,
  reducers: {
    setEmissionsFuelType: (
      state,
      action: { type: any; payload: FuelTypesType }
    ) => {
      return { ...state, emissionsType: action.payload };
    },
  },
});
export const { setEmissionsFuelType } = emissionsTypeSlice.actions;
export default emissionsTypeSlice.reducer;
