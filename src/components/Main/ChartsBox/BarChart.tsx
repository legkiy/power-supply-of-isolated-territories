import { ChartData,
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {IPopulations} from "./data/interfaces";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface IProps {
  dataSet: IPopulations['fuel']
}

function BarChart({dataSet}: IProps) {
  console.log(dataSet.map(el=>el.data))
  const data: ChartData<'bar'> = {
    labels: dataSet.map(el=>el.label),
    datasets:
        [
        {
          label: '1',
          data: dataSet.map(el=>el.data)
        }
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis:'y' as const,
    responsive:true

  };

  return (
  <div className="bar-chart">
    <Bar data={data} options={options} />
  </div>
  );
}

export default BarChart;
