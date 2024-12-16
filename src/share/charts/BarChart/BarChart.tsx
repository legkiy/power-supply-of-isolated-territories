import { FC, memo } from 'react';
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
  ChartDataset,
  ChartOptions,
  Plugin,
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

interface IBarChart {
  series: ChartDataset<'bar', number[]>[];
  labels: string[];
}

const BarChart: FC<IBarChart> = ({ series, labels }) => {
  const t = useTranslation().t;
  const data: ChartData<'bar'> = {
    labels,
    datasets: series,
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    responsive: true,
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
          labelPointStyle: () => {
            return {
              pointStyle: 'rectRounded',
              rotation: 1,
            };
          },
        },
        usePointStyle: true,
      },
    },
  };

  const textUnits: Plugin<'bar', object> = {
    id: 'textUnits',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillText(
        t('kmt'),
        0.3 * chart.width,
        chart.getDatasetMeta(0).data[4].y + 25
      );
    },
  };

  return (
    <div
      style={{
        height: '150px',
      }}
    >
      <Bar data={data} options={options} plugins={[textUnits]} />
    </div>
  );
};
export default memo(BarChart);
