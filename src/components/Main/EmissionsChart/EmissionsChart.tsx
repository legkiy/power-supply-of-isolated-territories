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

  const filterEmissions = emissionsData.filter(
    (emis) =>
      emis.name !== local.regions.SFO.Krasnoyarsk &&
      emis.name !== local.regions.DFO.sakhRep
  );

  const emissionsFuel = (fuels: EmissionsDataType[]) =>
    fuels.map(
      (emiss) =>
        emiss.fuel.find((fuel) => fuel.type === emissionsType.emissionsType)!
          .value
    );

  const overflowEmissions = emissionsData.find(
    (emis) =>
      emis.name === local.regions.SFO.Krasnoyarsk ||
      emis.name === local.regions.DFO.sakhRep
  );

  const overflowData: ChartData<'bar'> = {
    labels: [overflowEmissions].map((el) => el!.name),
    datasets: [{ data: emissionsFuel([overflowEmissions!]) }],
  };

  const data: ChartData<'bar'> = {
    labels: filterEmissions.map((el) => el.name),
    datasets: [{ data: emissionsFuel(filterEmissions) }],
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
      <div
        className={classNames('emissions-chart-2', {
          krasn: overflowEmissions?.name === local.regions.SFO.Krasnoyarsk,
        })}
      >
        <Bar data={overflowData} options={options} />
      </div>
    </div>
  );
};
export default EmissionsChart;
