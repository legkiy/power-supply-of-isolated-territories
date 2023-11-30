import { createSlice } from '@reduxjs/toolkit';
import { FuelTypesType } from '../../components/Main/EmissionsChart/data/interface';
import {
  ZVEmissionsDataDFO,
  ZVEmissionsDataSFO,
  ZVEmissionsDataType,
} from '../../components/Main/AllEmissionsChart/data';

export interface IEmissionsTypeState {
  emissionsType: FuelTypesType;
  allEmissionsData: ZVEmissionsDataType;
}

const emissionsTypeState: IEmissionsTypeState = {
  emissionsType: 'уголь',
  allEmissionsData: ZVEmissionsDataSFO,
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
    setAllEmissionsData: (state, action) => {
      switch (action.payload) {
        case 'SFO':
          return {
            ...state,
            allEmissionsData: ZVEmissionsDataSFO,
          };
        case 'DFO':
          return {
            ...state,
            allEmissionsData: ZVEmissionsDataDFO,
          };
        default:
          return {
            ...state,
            allEmissionsData: ZVEmissionsDataSFO,
          };
      }
    },
  },
});
export const { setEmissionsFuelType, setAllEmissionsData } =
  emissionsTypeSlice.actions;
export default emissionsTypeSlice.reducer;
