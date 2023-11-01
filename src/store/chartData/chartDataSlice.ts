import { createSlice } from '@reduxjs/toolkit';
import { IPopulations } from '../../components/Main/ChartsBox/data/interfaces';
import { DFOData, SFOData } from '../../components/Main/ChartsBox/data/data';
import {
  EmissionsDataType,
  FuelTypesType,
} from '../../components/Main/EmissionsChart/data/interface';
// import DFOData from '../../components/Main/ChartsBox/data/DFO_settlements.json';
import {
  EmissionsDataDFO,
  EmissionsDataSFO,
} from '../../components/Main/EmissionsChart/data/emissionsData';

export interface IChartDataState {
  chartData: IPopulations[];
  emissionsData: EmissionsDataType[];
}

const DFO = DFOData;
const SFO = SFOData;

const chartDataState: IChartDataState = {
  chartData: SFOData as IPopulations[],
  emissionsData: EmissionsDataSFO,
};

interface SetChartDataAction {
  type: string;
  payload: 'SFO' | 'DFO';
}

export const chartDataSlice = createSlice({
  name: 'chartData',
  initialState: chartDataState,
  reducers: {
    setChartData: (state, action: SetChartDataAction) => {
      switch (action.payload) {
        case 'SFO':
          return {
            ...state,
            chartData: SFO as IPopulations[],
            emissionsData: EmissionsDataSFO,
          };
        case 'DFO':
          return {
            ...state,
            chartData: DFO as IPopulations[],
            emissionsData: EmissionsDataDFO,
          };
        default:
          throw new Error(
            `Unknown value for action.payload '${action.payload}'`
          );
      }
    },
    // setEmissionsFuelType: (
    //   state,
    //   action: { type: any; payload: FuelTypesType }
    // ) => {
    //   return { ...state, emissionsData: action.payload };
    // },
  },
});
export const { setChartData } = chartDataSlice.actions;
export default chartDataSlice.reducer;
