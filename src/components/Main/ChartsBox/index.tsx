import RoundChart from './RoundChart';
import { IPopulations } from './data/interfaces';
import BarChart from "./BarChart";

interface IProps {
  chartDataSet: IPopulations;
  colors: string[];
}

const ChartBox = ({ chartDataSet, colors }: IProps) => {
  return (
    <div className="chart-box">
      <RoundChart chartDataSet={chartDataSet} colors={colors} />
      <BarChart dataSet={chartDataSet.fuel}/>
    </div>
  );
};

export default ChartBox;
