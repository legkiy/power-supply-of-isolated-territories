import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { IPopulations } from './data/interfaces';
import './charts.scss';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface IProps {
  chartDataSet: IPopulations;
}

const RoundChart = ({ chartDataSet }: IProps) => {
  ChartJS.defaults.font.size = 11;
  ChartJS.defaults.color = 'black';

  const options: ChartOptions<'doughnut'> = {
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
        backgroundColor: ['#365C74', '#5B3A7A', '#83A848', '#B5884E'],
      },
      {
        label: 'нас. пунктов',
        data: chartDataSet.settlements.map((el) => el.settlements),
        backgroundColor: ['#365C74', '#5B3A7A', '#83A848', '#B5884E'],
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