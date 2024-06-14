import { FC, memo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartDataset,
  ChartOptions,
  Plugin,
} from 'chart.js';
import styles from './ringChart.module.scss';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IRingChart {
  series: ChartDataset<'doughnut', number[]>[];
}

const RingChart: FC<IRingChart> = ({ series }) => {
  const t = useTranslation().t;
  const data: ChartData<'doughnut'> = {
    datasets: series,
  };

  const options: ChartOptions<'doughnut'> = {
    datasets: {
      doughnut: {
        borderWidth: 2,
        borderRadius: 3,
        borderAlign: 'inner',
      },
    },
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
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

  const textCenter: Plugin<'doughnut', object> = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const total = data.datasets[1].data.flat().reduce((d, i) => d + i);

      ctx.fillText(
        total.toString(),
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const totalPopulations = (
    data.datasets[0].data.flat().reduce((d, i) => d + i) / 1000
  ).toFixed(0);

  return (
    <div className={styles['ring-chart']}>
      <Doughnut
        data={data}
        options={options}
        plugins={[textCenter]}
        width={140}
        height={140}
      />
      <p className={styles['outer-value']}>
        {totalPopulations} {t('thousandPeople')}
      </p>
    </div>
  );
};
export default memo(RingChart);
