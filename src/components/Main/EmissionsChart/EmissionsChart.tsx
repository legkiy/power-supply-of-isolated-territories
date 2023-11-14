import { useSelector, useStore } from 'react-redux';
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
import { FuelTypesType } from './data/interface';
import { chartColors } from './data/emissionsData';

interface IEmissionsChart {}
const EmissionsChart: FC<IEmissionsChart> = ({}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const {
    chartData: { emissionsData },
    emissionsType,
  } = useSelector((state: IRootState) => state);
  const emissionsFuel = emissionsData.map(
    (emiss) =>
      emiss.fuel.find((fuel) => fuel.type === emissionsType.emissionsType)!
        .value
  );

  const data: ChartData<'bar'> = {
    labels: emissionsData.map((el) => el.name),
    datasets: [{ data: emissionsFuel }],
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
        grid: {
          display: false,
        },
      },
    },
    datasets: {
      bar: {
        barThickness: 20,
        backgroundColor: [chartColors[emissionsType.emissionsType]],
      },
    },
  };
  return (
    <div className="emissions">
      {/* <Doughnut data={data} options={options} /> */}
      <h4 className="emissions-title">
        Выбросы диоксида углерода при генерации тепловой и электрической энергии
        на удаленных труднодоступных территориях субъектов РФ, тыс. т СО2
      </h4>
      <div className="emissions-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
export default EmissionsChart;
