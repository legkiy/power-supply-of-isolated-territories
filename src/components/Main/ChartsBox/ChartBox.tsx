import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SFOPopulation from './data/populations/SFO_population.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBox = () => {
  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const labels = SFOPopulation.map((el) => el.name);

  const population = SFOPopulation.map((el) => el.settlements.map((item) => item.population));
  const numbers200 = population.map((el) => el[0]);
  console.log(numbers200);
  const numbers500 = population.map((el) => el[1]);
  const numbers1000 = population.map((el) => el[2]);
  const numbersMore1000 = population.map((el) => el[3]);

  const data = {
    labels,
    datasets: [
      {
        label: '200',
        data: numbers200,
        backgroundColor: 'red',
      },
      {
        label: '500',
        data: numbers500,
        backgroundColor: 'blue',
      },
      {
        label: '1000',
        data: numbers1000,
        backgroundColor: 'green',
      },
      {
        label: 'more1000',
        data: numbersMore1000,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartBox;
