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
  const chartColors: { [key in FuelTypesType]: string } = {
    уголь: '#5c5c5c',
    нефть: '#79541e',
    'газо-конденсатное': '#3e791e',
    газ: '#1e98ff',
    нефтепродукты: '#c74c00',
    бензин: '#4d791e',
    дизельное: '#86860d',
    ВСЕГО: '#691eff',
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
      // doughnut: {
      //   borderWidth: 2,
      //   borderRadius: 4,
      //   borderAlign: 'inner',
      //   backgroundColor: [
      //     '#5c5c5c',
      //     '#3e791e',
      //     '#1e98ff',
      //     '#79541e',
      //     '#c74c00',
      //     '#86860d',
      //     '#691eff',
      //   ],
      // },
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
