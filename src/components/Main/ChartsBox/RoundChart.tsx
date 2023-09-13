import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  ChartOptions,
  PointElement,
} from 'chart.js';
import { IPopulations } from './data/interfaces';
import { ChartData } from 'chart.js';
import { ReactNode, memo, useMemo } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title, PointElement);

interface IProps {
  chartDataSet: IPopulations;
  colors: string[];
  templateChildren?: ReactNode;
}

const RoundChart = ({ chartDataSet, colors, templateChildren }: IProps) => {
  ChartJS.defaults.font.size = 11;
  ChartJS.defaults.color = 'black';

  const options: ChartOptions<'doughnut'> = {
    datasets: {
      doughnut: {
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: colors,
        borderAlign: 'inner',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'average',
        usePointStyle: true,
        bodyColor: '#ffffff',
      },
      title: {
        display: false,
        text: chartDataSet.name,
        padding: { top: 10 },
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
    <div className="round-chart">
      <Doughnut data={data} options={options} />
      <span className="count-of-settel">{countOfSettlements}</span>
      <span className="count-of-popul">
        {(countOfPopulation / 1000).toFixed(0)} тыс. чел.
      </span>
      {templateChildren}
    </div>
  );
};

export default memo(RoundChart);
