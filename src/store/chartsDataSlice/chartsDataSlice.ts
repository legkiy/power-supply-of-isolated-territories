import { createSlice } from '@reduxjs/toolkit';

import SFO from '@/assets/chartsData/SFO.json';
import DFO from '@/assets/chartsData/DFO.json';

import SFOEmissionsCO2 from '@/assets/emissionsData/co2/SFO.json';
import DFODmissionsCO2 from '@/assets/emissionsData/co2/DFO.json';

import SFOPollutants from '@/assets/emissionsData/pollutants/SFO.json';
import DFOPollutants from '@/assets/emissionsData/pollutants/DFO.json';

import { SettlementsChartType, EmissionsDataType } from '@/share/types';

export interface IChartDataState {
  settlementsChartData: SettlementsChartType[];
  emissionsData: EmissionsDataType[];
  pollutantsData: EmissionsDataType[];
}

const chartsDataState: IChartDataState = {
  settlementsChartData: SFO as unknown as SettlementsChartType[],
  emissionsData: SFOEmissionsCO2 as unknown as EmissionsDataType[],
  pollutantsData: SFOPollutants as unknown as EmissionsDataType[],
};

interface SetChartDataAction {
  type: string;
  payload: 'SFO' | 'DFO';
}

export const chartsDataSlice = createSlice({
  name: 'chartsData',
  initialState: chartsDataState,
  reducers: {
    setChartsData: (state, action: SetChartDataAction) => {
      switch (action.payload) {
        case 'SFO':
          return {
            ...state,
            settlementsChartData: SFO as unknown as SettlementsChartType[],
            emissionsData: SFOEmissionsCO2 as unknown as EmissionsDataType[],
            pollutantsData: SFOPollutants as unknown as EmissionsDataType[],
          };
        case 'DFO':
          return {
            ...state,
            settlementsChartData: DFO as unknown as SettlementsChartType[],
            emissionsData: DFODmissionsCO2 as unknown as EmissionsDataType[],
            pollutantsData: DFOPollutants as unknown as EmissionsDataType[],
          };
        default:
          throw new Error(
            `Unknown value for action.payload '${action.payload}'`
          );
      }
    },
  },
});
export const { setChartsData } = chartsDataSlice.actions;
export default chartsDataSlice.reducer;
