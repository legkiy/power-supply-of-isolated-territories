import { ChartData, ChartOptions } from 'chart.js';
import { FC, memo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { chartColors } from '../EmissionsChart/data/emissionsData';

interface IAllEmissionsChart {}
const AllEmissionsChart: FC<IAllEmissionsChart> = ({}) => {
  const {
    chartData: { emissionsData },
  } = useSelector((state: IRootState) => state);

  const datasetArray = emissionsData.reduce((acc: any, item) => {
    item.fuel.forEach((fuelItem) => {
      const existingItem = acc.find(
        (bItem: { label: string }) => bItem.label === fuelItem.type
      );
      if (existingItem) {
        existingItem.data.push(fuelItem.value);
      } else {
        acc.push({
          label: fuelItem.type,
          data: [fuelItem.value],
          backgroundColor: chartColors[fuelItem.type],
        });
      }
    });
    return acc;
  }, []);

  const data: ChartData<'bar'> = {
    labels: emissionsData.map(({ name }) => name),
    datasets: datasetArray,
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
