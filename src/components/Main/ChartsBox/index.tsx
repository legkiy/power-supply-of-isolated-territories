import RoundChart from './RoundChart';
import { IPopulations } from './data/interfaces';
import BarChart from './BarChart';
import { memo } from 'react';

interface IProps {
  chartDataSet: IPopulations;
  colors: string[];
}

const ChartBox = ({ chartDataSet, colors }: IProps) => {
  return (
    <div className="chart-box">
      <div className="region-title">
        <p>{chartDataSet.name}</p>
      </div>
      <RoundChart chartDataSet={chartDataSet} colors={colors} />
      <BarChart dataSet={chartDataSet.fuel} />
    </div>
  );
};

export default memo(ChartBox);
