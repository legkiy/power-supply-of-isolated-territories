import { EmissionsChart } from '@/share/charts';
import { chartColors } from '@/share/charts/colors';
import { EmissionsDataType } from '@/share/types';
import { useAppSelector } from '@/store';
import { ChartData } from 'chart.js';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './pollutants.module.scss';
import clsx from 'clsx';

const Pollutants: FC = () => {
  const t = useTranslation().t;
  const itsDFO =
    new URLSearchParams(window.location.search).get('region') === 'DFO';

  const pollutantsData = useAppSelector(
    (state) => state.chartData.pollutantsData
  );

  const emissionsFuel = useCallback(
    (
      data: EmissionsDataType[],
      barThickness: number
    ): ChartData<'bar'>['datasets'] =>
      data.reduce((acc: ChartData<'bar'>['datasets'], item) => {
        item.fuel.forEach((fuelItem) => {
          const existingItem = acc.find((el) => el.label === fuelItem.type);

          if (existingItem) {
            existingItem.data.push(fuelItem.value);
          } else {
            if (fuelItem.type !== 'ВСЕГО') {
              acc.push({
                label: fuelItem.type,
                data: [fuelItem.value],
                // stack: 'stack 0',
                backgroundColor: chartColors[fuelItem.type] as string,
                barThickness,
              });
            }
          }
        });
        return acc;
      }, []),
    []
  );

  const filterEmissions = useMemo(
    () =>
      pollutantsData.filter(
        (emis) =>
          emis.name !== 'Krasnoyarsk' &&
          emis.name !== 'Khabarovsk' &&
          emis.name !== 'ChukotkaAO' &&
          emis.name !== 'sakhRep' &&
          emis.name !== 'SakhalinObl'
      ),
    [pollutantsData]
  );

  const overflowEmissions = pollutantsData.filter(
    (emis) =>
      emis.name === 'Krasnoyarsk' ||
      emis.name === 'Khabarovsk' ||
      emis.name === 'ChukotkaAO' ||
      emis.name === 'sakhRep' ||
      emis.name === 'SakhalinObl'
  );

  const data: ChartData<'bar'> = {
    labels: filterEmissions.map(() => ''),
    datasets: emissionsFuel(filterEmissions, 10),
  };

  const overflowData: ChartData<'bar'> = {
    labels: overflowEmissions.map(() => ''),
    datasets: emissionsFuel(overflowEmissions, 15),
  };

  return (
    <div className={styles['pollutants-sector']}>
      <div className={styles['left-side']}>
        <h5 className={styles['pollutants-label']}>
          {t('emissions.allEmissions')}
        </h5>
        <div
          className={clsx(styles['pollutants-main'], {
            [styles['pollutants-main__DFO']]: itsDFO,
          })}
        >
          <EmissionsChart data={data} />
        </div>
        <div
          className={clsx(styles['pollutants-overflow'], {
            [styles['pollutants-overflow__DFO']]: itsDFO,
          })}
        >
          <EmissionsChart data={overflowData} />
        </div>
      </div>
    </div>
  );
};
export default Pollutants;
