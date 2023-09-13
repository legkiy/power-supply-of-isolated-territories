import {
  ChartData,
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IPopulations } from './data/interfaces';
import { ReactNode, memo } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

interface IProps {
  dataSet: IPopulations['fuel'];
  templateChildren?: ReactNode;
}

function BarChart({ dataSet, templateChildren }: IProps) {
  const data: ChartData<'bar'> = {
    labels: dataSet.map((el) => el.label),
    datasets: [
      {
        label: '1',
        data: dataSet.map((el) => el.data),
        xAxisID: 'xAxis',
        backgroundColor: [
          '#5c5c5c',
          '#3e791e',
          '#1e98ff',
          '#79541e',
          '#c74c00',
          '#86860d',
          '#691eff',
        ],
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    datasets: {
      bar: {
        borderRadius: 2,
        borderWidth: 0,
        barPercentage: 0.8,
        pointStyle: 'circle',
      },
    },
    scales: {
      xAxis: {
        max: 150,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: () => '',
          label(context) {
            return (
              context.label + ': ' + context.dataset.data[context.dataIndex]
            );
          },
        },
        usePointStyle: true,
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
      <div className="bar-sizing">т.у.т</div>
      {templateChildren}
    </div>
  );
}

export default memo(BarChart);
