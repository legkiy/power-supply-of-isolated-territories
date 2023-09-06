import { createSlice } from '@reduxjs/toolkit';
import { IPopulations } from '../../components/Main/ChartsBox/data/interfaces';
import { DFOData, SFOData } from '../../components/Main/ChartsBox/data/data';
// import DFOData from '../../components/Main/ChartsBox/data/DFO_settlements.json';

export interface IChartDataState {
  chartData: IPopulations[];
}

const DFO = DFOData;
const SFO = SFOData;

const chartDataState: IChartDataState = {
  chartData: SFOData as IPopulations[],
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
          return { ...state, chartData: SFO as IPopulations[] };
        case 'DFO':
          return { ...state, chartData: DFO as IPopulations[] };
        default:
          throw new Error(
            `Unknown value for action.payload '${action.payload}'`
          );
      }
    },
  },
});
export const { setChartData } = chartDataSlice.actions;
export default chartDataSlice.reducer;
