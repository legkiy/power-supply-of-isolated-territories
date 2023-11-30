import { ChartData, ChartOptions } from 'chart.js';
import { FC, memo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { chartColors } from '../EmissionsChart/data/emissionsData';
import './AllEmissionsChart.scss';
import local from 'src/locale';

interface IAllEmissionsChart {}
const AllEmissionsChart: FC<IAllEmissionsChart> = ({}) => {
  const { allEmissionsData } = useSelector(
    (state: IRootState) => state.emissionsType
  );

  const overflowEmissions = allEmissionsData.find(
    (emis) =>
      emis.name === local.regions.SFO.Krasnoyarsk ||
      emis.name === local.regions.DFO.sakhRep
  );
  console.log(overflowEmissions);

  const filterEmissions = allEmissionsData.filter(
    (emis) =>
      emis.name !== local.regions.SFO.Krasnoyarsk &&
      emis.name !== local.regions.DFO.sakhRep
  );

  const overflowData: {
    label: string;
    data: number[];
    stack: string;
    backgroundColor?: string;
  }[] = [overflowEmissions!].reduce((acc: any, item) => {
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
    labels: [overflowEmissions].map((el) => ''),
    datasets: overflowData,
  };

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
  //как вытащить элкмент из массива по след. условиям: в поле содержащем массив чисел есть число больше 200
  // datasetArray.map((el) => console.log(!!el.data.find((value) => value > 200)));

  const materialColors = {
    CO2: '#b82107',
    CO: '#e9aa57',
    SO2: '#eddd75',
    NOx: '#58bfff',
    solid: '#685b5b',
  };
  const data: ChartData<'bar'> = {
    labels: filterEmissions.map(({ name }) => ''),
    datasets: datasetArray,
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
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
        barThickness: 20,
      },
    },
  };
  return (
    <div className="all-emissions-wrapper">
      <h4 className="all-emissions-title">
        Выбросы загрязняющих веществ от котельных и ДЭС в удаленных и
        труднодоступных территориях востока России, тыс. т
      </h4>
      <div className="all-emissions">
        <Bar options={options} data={data} />
      </div>
      <div className="all-emissions-2">
        <Bar options={options} data={overfowData} />
      </div>
    </div>
  );
};
export default memo(AllEmissionsChart);
