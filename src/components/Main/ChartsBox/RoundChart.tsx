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
        borderWidth: 3,
        borderRadius: 3,
        backgroundColor: colors,
      },
    },
    cutout: 15,
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

  return (
    <div className="chart-box">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RoundChart;
