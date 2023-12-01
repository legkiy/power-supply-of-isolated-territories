import { ChartData, ChartOptions } from 'chart.js';
import { FC, memo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { chartColors } from '../EmissionsChart/data/emissionsData';
import './AllEmissionsChart.scss';
import local from 'src/locale';
import classNames from 'classnames';

interface IAllEmissionsChart {}
const AllEmissionsChart: FC<IAllEmissionsChart> = ({}) => {
  const { allEmissionsData } = useSelector(
    (state: IRootState) => state.emissionsType
  );

  const queryRegionParams = new URLSearchParams(window.location.search);
  const regionQuery = queryRegionParams.get('region') as 'SFO' | 'DFO' | null;

  const overflowEmissions = allEmissionsData.filter(
    (emis) =>
      emis.name === local.regions.SFO.Krasnoyarsk ||
      emis.name === local.regions.DFO.Khabarovsk ||
      emis.name === local.regions.DFO.ChukotkaAO ||
      emis.name === local.regions.DFO.sakhRep
  );
  const filterEmissions = allEmissionsData.filter(
    (emis) =>
      emis.name !== local.regions.SFO.Krasnoyarsk &&
      emis.name !== local.regions.DFO.Khabarovsk &&
      emis.name !== local.regions.DFO.ChukotkaAO &&
      emis.name !== local.regions.DFO.sakhRep
  );

  const overflowData: {
    label: string;
    data: number[];
    stack: string;
    backgroundColor?: string;
  }[] = overflowEmissions!.reduce((acc: any, item) => {
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

  const overfowData: ChartData<'bar'> = {
    labels: overflowEmissions.map((el) => ''),
    datasets: overflowData,
  };
  console.log(overflowEmissions);

  const datasetArray: {
    label: string;
    data: number[];
    stack: string;
    backgroundColor?: string;
  }[] = filterEmissions.reduce((acc: any, item) => {
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

  const data: ChartData<'bar'> = {
    labels: filterEmissions.map(({ name }) => ''),
    datasets: datasetArray,
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
    datasets: {
      bar: {
        pointStyle: 'circle',
        barThickness,
      },
    },
  });
  return (
    <div className="all-emissions-wrapper">
      <h4 className="all-emissions-title">{local.emissions.allEmissions}</h4>
      <div
        className={classNames('all-emissions', {
          'all-emissions-DFO': regionQuery === 'DFO',
        })}
      >
        <Bar options={options()} data={data} />
      </div>
      <div
        className={classNames('all-emissions-2', {
          'all-emissions-2-DFO': regionQuery === 'DFO',
        })}
      >
        <Bar options={options(18)} data={overfowData} />
      </div>
    </div>
  );
};
export default memo(AllEmissionsChart);
