import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  ChartOptions,
} from 'chart.js';
import { IPopulations } from './data/interfaces';
import './charts.scss';
import { ChartData } from 'chart.js';
import { useMemo } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface IProps {
  chartDataSet: IPopulations;
  colors: string[];
}

const RoundChart = ({ chartDataSet, colors }: IProps) => {
  ChartJS.defaults.font.size = 11;
  ChartJS.defaults.color = 'black';

  const options: ChartOptions<'doughnut'> = {
    datasets: {
      doughnut: {
        borderWidth: 6,
        borderRadius: 3,
        backgroundColor: colors,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        position: 'average',
      },
      title: {
        display: true,
        text: chartDataSet.name,
      },
    },
  };

  const data: ChartData<'doughnut'> = {
    datasets: [
      {
        label: 'население',
        data: chartDataSet.settlements.map((el) => el.population),
      },
      {
        label: 'нас. пунктов',
        data: chartDataSet.settlements.map((el) => el.settlements),
      },
    ],
  };

  const countOfPopulation = useMemo(
    () =>
      chartDataSet.settlements
        .map((el) => el.population)
        .reduce((prev, next) => prev + next),
    [chartDataSet]
  );

  const countOfSettlements = useMemo(
    () =>
      chartDataSet.settlements
        .map((el) => el.settlements)
        .reduce((prev, next) => prev + next),
    [chartDataSet]
  );
  
  return (
    <div className="chart-box">
      <Doughnut data={data} options={options} />
      <span className="count-of-settel">{countOfSettlements}</span>
      <span className="count-of-popul">{countOfPopulation}</span>
    </div>
  );
};

export default RoundChart;
