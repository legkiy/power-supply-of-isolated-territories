import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
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
import { useTranslation } from 'react-i18next';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IEmissionsChart {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const EmissionsChart: FC<IEmissionsChart> = ({ data, options }) => {
  const t = useTranslation().t;
  const optionsChart: ChartOptions<'bar'> = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          label: (item) => {
            return t(`fuel.${item.dataset.label}`) + ' ' + item.formattedValue;
          },
        },
      },
    },
    ...options,
  };

  return <Bar data={data} options={optionsChart} />;
};
export default EmissionsChart;
