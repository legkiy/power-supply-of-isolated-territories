import { Doughnut } from 'react-chartjs-2';
import { IPopulations } from './data/interfaces';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  chartDataSet: IPopulations[];
}

const DoughnutChart = ({ chartDataSet }: IProps) => {
  console.log(chartDataSet.map((el) => el.settlements.map((item) => item.population))[0]);

  const options: ChartOptions<'doughnut'> = {};
  const data: ChartData<'doughnut'> = {
    labels: chartDataSet.map((el) => el.name),
    datasets: [
      {
        data:chartDataSet.map((el) => el.settlements.map((item) => item.population))[0]
      }
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
