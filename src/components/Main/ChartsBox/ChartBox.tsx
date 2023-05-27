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
import SFO from './data/SFO_population.json';
import DFO from './data/DFO_settlements.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBox = () => {
  ChartJS.defaults.font.size = 11;
  ChartJS.defaults.color = 'black';

  const options: ChartOptions<'bar'> = {
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
  const labels = SFO.map((el) => el.name);

  const population = SFO.map((el) => el.settlements.map((item) => item.population));
  const settlement = SFO.map((el) => el.settlements.map((item) => item.settlements));

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

  return <Bar options={options} data={data} />;
};

export default ChartBox;
