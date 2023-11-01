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
import { Bar, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FC } from 'react';
import './EmissionsChart.scss';

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

  console.log(emissionsType);

  const data: ChartData<'bar'> = {
    labels: emissionsData.map((el) => el.name),
    datasets: [{ data: emissionsFuel }],
    // datasets: emissionsData.map((el) => ({
    //   data: [el.fuel.find((fuel) => fuel.type === selectType)!.value],
    // circumference:
    //   el.fuel.find((fuel) => fuel.type === selectType)!.value / 9,
    // })),
  };

  const options: ChartOptions<'bar'> = {
    plugins: {
      // datalabels: {
      //   color: 'blue',
      //   // align: ,

      //   rotation: -80,
      //   clamp: false,
      //   formatter(value, context) {
      //     return context.dataset.label;
      //   },
      // },
      legend: {
        display: false,
      },
    },
    // circumference: 90,
    // rotation: -90,
    // responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          // display: false,
        },
      },
    },
    datasets: {
      bar: {
        barThickness: 20,
        backgroundColor: ['#1e98ff'],
      },
      doughnut: {
        borderWidth: 2,
        borderRadius: 4,
        borderAlign: 'inner',
        backgroundColor: [
          '#5c5c5c',
          '#3e791e',
          '#1e98ff',
          '#79541e',
          '#c74c00',
          '#86860d',
          '#691eff',
        ],
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
