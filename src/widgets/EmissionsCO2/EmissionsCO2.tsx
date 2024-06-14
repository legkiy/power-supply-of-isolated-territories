import { EmissionsChart } from '@/share/charts';
import { chartColors } from '@/share/charts/colors';
import { EmissionsDataType } from '@/share/types';
import { useAppSelector } from '@/store';
import { ChartData } from 'chart.js';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './emissionsCO2.module.scss';
import clsx from 'clsx';

const EmissionsCO2: FC = () => {
  const t = useTranslation().t;
  const itsDFO =
    new URLSearchParams(window.location.search).get('region') === 'DFO';

  const emissionsData = useAppSelector(
    (state) => state.chartData.emissionsData
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
                stack: 'stack 0',
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
      emissionsData.filter(
        (emis) =>
          emis.name !== 'Krasnoyarsk' &&
          emis.name !== 'Khabarovsk' &&
          emis.name !== 'ChukotkaAO' &&
          emis.name !== 'sakhRep' &&
          emis.name !== 'SakhalinObl'
      ),
    [emissionsData]
  );

  const overflowEmissions = emissionsData.filter(
    (emis) =>
      emis.name === 'Krasnoyarsk' ||
      emis.name === 'Khabarovsk' ||
      emis.name === 'ChukotkaAO' ||
      emis.name === 'sakhRep' ||
      emis.name === 'SakhalinObl'
  );

  const data: ChartData<'bar'> = {
    labels: filterEmissions.map((el) => t(`regions.${el.name}`)),
    datasets: emissionsFuel(filterEmissions, 10),
  };

  const overflowData: ChartData<'bar'> = {
    labels: overflowEmissions.map((el) => t(`regions.${el!.name}`)),
    datasets: emissionsFuel(overflowEmissions, 15),
  };

  return (
    <div className={styles['emissions-sector']}>
      <div className={styles['left-side']}>
        <h5 className={styles['emission-label']}>
          {t('emissions.coEmissions')}
        </h5>
        <div
          className={clsx(styles['emissions-main'], {
            [styles['emissions-main__DFO']]: itsDFO,
          })}
        >
          <EmissionsChart data={data} />
        </div>
        <div
          className={clsx(styles['emissions-overflow'], {
            [styles['emissions-overflow__DFO']]: itsDFO,
          })}
        >
          <EmissionsChart data={overflowData} />
        </div>
      </div>
    </div>
  );
};
export default EmissionsCO2;
