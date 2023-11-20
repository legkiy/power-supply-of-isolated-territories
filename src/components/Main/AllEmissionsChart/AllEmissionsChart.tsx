import { ChartData, ChartOptions } from 'chart.js';
import { FC, memo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { chartColors } from '../EmissionsChart/data/emissionsData';

interface IAllEmissionsChart {}
const AllEmissionsChart: FC<IAllEmissionsChart> = ({}) => {
  const {
    chartData: { emissionsData },
  } = useSelector((state: IRootState) => state);

  const [overValueChart, setOverValueChart] = useState([]);

  const datasetArray: {
    label: string;
    data: number[];
    stack: string;
    backgroundColor?: string;
  }[] = emissionsData.reduce((acc: any, item) => {
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
            backgroundColor: chartColors[fuelItem.type],
            stack: 'stack 0',
          });
        }
      }
    });
    return acc;
  }, []);
  //как вытащить элкмент из массива по след. условиям: в поле содержащем массив чисел есть число больше 200
  datasetArray.map((el) => console.log(!!el.data.find((value) => value > 200)));

  const materialColors = {
    CO2: '#b82107',
    CO: '#e9aa57',
    SO2: '#eddd75',
    NOx: '#58bfff',
    solid: '#685b5b',
  };
  const data: ChartData<'bar'> = {
    labels: emissionsData.map(({ name }) => name),
    datasets: [
      ...datasetArray,
      {
        label: 'CO2',
        data: [200, 400, 500],
        stack: 'stack 1',
      },
      {
        label: 'CO',
        data: [200, 400, 300],
        stack: 'stack 1',
      },
      {
        label: 'CO',
        data: [200, 400, 300],
        stack: 'stack 1',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
export default memo(AllEmissionsChart);
