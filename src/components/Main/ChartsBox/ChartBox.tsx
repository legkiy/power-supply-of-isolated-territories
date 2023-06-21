import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IPopulations } from './data/interfaces';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IProps {
  chartDataSet: IPopulations[];
}

const ChartBox = ({ chartDataSet }: IProps) => {
  ChartJS.defaults.font.size = 11;
  ChartJS.defaults.color = 'black';

  const options = {
    datasets: {
      bar: {
        barThickness: 10,
        barPercentage: 0.3,
      },
    },
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'тыс. чел.',
          align: 'end',
          font: {
            size: 14,
          },
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const labels = chartDataSet.map((el) => el.name);

  const population = chartDataSet.map((el) => el.settlements.map((item) => item.population));
  const settlement = chartDataSet.map((el) => el.settlements.map((item) => item.settlements));

  const settlement200 = settlement.map((el) => el[0]);
  const settlement500 = settlement.map((el) => el[1]);
  const settlement1000 = settlement.map((el) => el[2]);
  const settlementMore1000 = settlement.map((el) => el[3]);

  const numbers200 = population.map((el) => el[0]);
  const numbers500 = population.map((el) => el[1]);
  const numbers1000 = population.map((el) => el[2]);
  const numbersMore1000 = population.map((el) => el[3]);

  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'количество населенных пунктов',
        data: settlement200,
        backgroundColor: 'red',
        stack: '1',
      },
      {
        label: 'количество населенных пунктов',
        data: settlement500,
        backgroundColor: 'blue',
        stack: '1',
      },
      {
        label: 'количество населенных пунктов',
        data: settlement1000,
        backgroundColor: 'green',
        stack: '1',
      },
      {
        label: 'количество населенных пунктов',
        data: settlementMore1000,
        stack: '1',
      },
      {
        label: 'до 200 чел.',
        data: numbers200.map((el) => el / 1000),
        backgroundColor: 'red',
        stack: '0',
      },
      {
        label: 'до 500 чел.',
        data: numbers500.map((el) => el / 1000),
        backgroundColor: 'blue',
        stack: '0',
      },
      {
        label: 'до 1000 чел.',
        data: numbers1000.map((el) => el / 1000),
        backgroundColor: 'green',
        stack: '0',
      },
      {
        label: 'более 1000 чел.',
        data: numbersMore1000.map((el) => el / 1000),
        stack: '0',
      },
    ],
  };

  return (
    <div className="chart-wrapper">
      <Bar options={options as ChartOptions<'bar'>} data={data} />
    </div>
  );
};

export default ChartBox;
