import { ChartCard } from '@/share/UI';
import { useAppSelector } from '@/store';
import { FC } from 'react';
import styles from './chartSection.module.scss';
import { ChartDataset } from 'chart.js';
import { useTranslation } from 'react-i18next';
import { BarChart, RingChart, TemplateChart } from '@/share/charts';
import { fuelColors, settlementsColors } from '@/share/charts/colors';
import { Grid } from '@mui/material';

const ChartSection: FC = () => {
  const t = useTranslation().t;

  const settlementsChartData = useAppSelector(
    (state) => state.chartData.settlementsChartData
  );
  const series: {
    settlements: ChartDataset<'doughnut', number[]>[];
    fuel: ChartDataset<'bar', number[]>[];
  }[] = settlementsChartData.map((d) => ({
    settlements: [
      {
        label: t('regions.population'),
        data: d.settlements.map((s) => s.population),
        backgroundColor: settlementsColors,
      },
      {
        label: t('regions.settlements'),
        data: d.settlements.map((s) => s.settlements),
        backgroundColor: settlementsColors,
      },
    ],

    fuel: [
      {
        label: '1',
        data: d.fuel.map((f) => f.data),
        backgroundColor: fuelColors,
      },
    ],
  }));

  const fuelLabels = settlementsChartData[0].fuel.map((f) =>
    t(`fuel.${f.label}`)
  );

  return (
    <Grid container spacing={1}>
      <Grid item xs={4.8}>
        <TemplateChart />
      </Grid>
      {series.map((series, index) => (
        <Grid item xs={2.4} sx={{}}>
          <ChartCard
            style={{ width: '100%', height: '100%' }}
            title={t(`regions.${settlementsChartData[index].name}`)}
            key={index}
          >
            <RingChart series={series.settlements} />
            <BarChart series={series.fuel} labels={fuelLabels} />
          </ChartCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div className={styles['chart-section']}>
      <TemplateChart />
      {series.map((series, index) => (
        <ChartCard
          style={{ width: '18.4%' }}
          title={t(`regions.${settlementsChartData[index].name}`)}
          key={index}
        >
          <RingChart series={series.settlements} />
          <BarChart series={series.fuel} labels={fuelLabels} />
        </ChartCard>
      ))}
    </div>
  );
};
export default ChartSection;
