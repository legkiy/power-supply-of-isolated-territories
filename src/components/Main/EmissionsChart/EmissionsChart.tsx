import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FC } from 'react';
import './EmissionsChart.scss';
import { EmissionsDataType } from './data/interface';
import { chartColors } from './data/emissionsData';
import local from 'src/locale';
import classNames from 'classnames';

interface IEmissionsChart {}

const EmissionsChart: FC<IEmissionsChart> = ({}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const {
    chartData: { emissionsData },
    emissionsType,
  } = useSelector((state: IRootState) => state);

  const queryRegionParams = new URLSearchParams(window.location.search);

  const regionQuery = queryRegionParams.get('region') as 'SFO' | 'DFO' | null;
  const langQuery = queryRegionParams.get('lang') as 'ru' | 'en' | null;

  const filterEmissions = emissionsData.filter(
    (emis) =>
      emis.name !== local.regions.SFO.Krasnoyarsk &&
      emis.name !== local.regions.DFO.Khabarovsk &&
      emis.name !== local.regions.DFO.ChukotkaAO &&
      emis.name !== local.regions.DFO.sakhRep
  );

  const overflowEmissions = emissionsData.filter(
    (emis) =>
      emis.name === local.regions.SFO.Krasnoyarsk ||
      emis.name === local.regions.DFO.Khabarovsk ||
      emis.name === local.regions.DFO.ChukotkaAO ||
      emis.name === local.regions.DFO.sakhRep
  );

  const emissionsFuel = (
    data: EmissionsDataType[]
  ): {
    label: string;
    data: number[];
    stack: string;
    backgroundColor?: string;
  }[] =>
    data.reduce((acc: any, item) => {
      item.fuel.forEach((fuelItem) => {
        const existingItem = acc.find(
          (bItem: { label: string }) => bItem.label === fuelItem.type
        );
        if (existingItem) {
          existingItem.data.push(fuelItem.value);
        } else {
          if (fuelItem.type !== 'ВСЕГО') {
            acc.push({
              label: fuelItem.type,
              data: [fuelItem.value],
              //@ts-ignore
              backgroundColor: chartColors[fuelItem.type],
              stack: 'stack 0',
            });
          }
        }
      });
      return acc;
    }, []);

  const overflowData: ChartData<'bar'> = {
    labels: overflowEmissions.map((el) => el!.name),
    datasets: emissionsFuel(overflowEmissions),
  };
  const data: ChartData<'bar'> = {
    labels: filterEmissions.map((el) => el.name),
    datasets: emissionsFuel(filterEmissions),
  };

  const options = (barThickness: number = 10): ChartOptions<'bar'> => ({
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    datasets: {
      bar: {
        pointStyle: 'circle',
        barThickness,
        backgroundColor: [chartColors[emissionsType.emissionsType]],
      },
    },
  });

  return (
    <div className="emissions">
      <h4 className="emissions-title">{local.emissions.allEmissions}</h4>
      <div
        className={classNames('emissions-chart', {
          'emissions-chart-DFO': regionQuery === 'DFO',
          'emissions-chart-DFO-en': langQuery === 'en',
        })}
      >
        <Bar data={data} options={options()} />
      </div>
      <div
        className={classNames('emissions-chart-2', {
          'emissions-chart-2-DFO': regionQuery === 'DFO',
        })}
      >
        <Bar data={overflowData} options={options(18)} />
      </div>
    </div>
  );
};
export default EmissionsChart;
