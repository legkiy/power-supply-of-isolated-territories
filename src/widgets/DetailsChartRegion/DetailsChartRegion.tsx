import { Box } from '@mui/material';
import { FC } from 'react';
import { NasaParametersType } from '@/share/types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartData,
  PointElement,
  LineElement,
  ChartOptions,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
// const mockData = {
//   WS10M: {
//     '202001': 4.17,
//     '202002': 4.03,
//     '202003': 5.59,
//     '202004': 3.89,
//     '202005': 4.55,
//     '202006': 3.59,
//     '202007': 3.18,
//     '202008': 3.25,
//     '202009': 3.62,
//     '202010': 4.11,
//     '202011': 3.73,
//     '202012': 4.95,
//     '202013': 4.06,
//     '202101': 5.52,
//     '202102': 5.2,
//     '202103': 4.64,
//     '202104': 4.95,
//     '202105': 5.34,
//     '202106': 3.39,
//     '202107': 2.54,
//     '202108': 2.99,
//     '202109': 3.03,
//     '202110': 3.44,
//     '202111': 4.58,
//     '202112': 5.15,
//     '202113': 4.22,
//     '202201': 3.91,
//     '202202': 4.39,
//     '202203': 4.12,
//     '202204': 5.2,
//     '202205': 3.94,
//     '202206': 3.17,
//     '202207': 2.97,
//     '202208': 3.08,
//     '202209': 4.21,
//     '202210': 3.42,
//     '202211': 3.81,
//     '202212': 5.27,
//     '202213': 3.95,
//   },
//   ALLSKY_SFC_SW_DWN: {
//     '202001': 1.5,
//     '202002': 2.63,
//     '202003': 4.06,
//     '202004': 5.68,
//     '202005': 6.24,
//     '202006': 6.45,
//     '202007': 5.73,
//     '202008': 4.62,
//     '202009': 4.17,
//     '202010': 2.84,
//     '202011': 1.56,
//     '202012': 1.19,
//     '202013': 3.89,
//     '202101': 1.43,
//     '202102': 2.57,
//     '202103': 3.96,
//     '202104': 4.74,
//     '202105': 5.84,
//     '202106': 6.52,
//     '202107': 5.84,
//     '202108': 4.27,
//     '202109': 3.91,
//     '202110': 2.69,
//     '202111': 1.55,
//     '202112': 1.2,
//     '202113': 3.71,
//     '202201': 1.52,
//     '202202': 2.73,
//     '202203': 4.11,
//     '202204': 5.38,
//     '202205': 6.57,
//     '202206': 6.74,
//     '202207': 5.42,
//     '202208': 5.57,
//     '202209': 3.99,
//     '202210': 2.85,
//     '202211': 1.59,
//     '202212': 1.21,
//     '202213': 3.98,
//   },
// };

const paramsProcessing = (parameters: NasaParametersType) => {
  const solarData = Object.entries(parameters.ALLSKY_SFC_SW_DWN).map(
    ([, value]) => value
  );
  const windData = Object.entries(parameters.WS10M).map(([, value]) => value);
  const timeStamp = Object.entries(parameters.WS10M)
    .map(([date]) => date)
    .filter((item) => item.slice(4) !== '13') // Удаляем элементы с месяцем "13"
    .map((item) => {
      const year = item.slice(0, 4); // Получаем год
      const month = item.slice(4); // Получаем месяц
      return `${month}.${year}`; // Форматируем в "MM.YYYY"
    });
  return {
    solarData,
    windData,
    timeStamp,
  };
};

interface DetailsChartRegionProps {
  parameters: NasaParametersType;
}
const DetailsChartRegion: FC<DetailsChartRegionProps> = ({ parameters }) => {
  const processingData = paramsProcessing(parameters);

  const data: ChartData<'line'> = {
    labels: processingData.timeStamp,
    datasets: [
      {
        label: 'Solar',
        data: processingData.solarData,
        borderColor: '#ffdf0d',
        backgroundColor: '#ffdf0d90',
        fill: 'start',
      },
      {
        label: 'Wind',
        data: processingData.windData,
        borderColor: '#0d66ff',
        backgroundColor: '#0d66ff90',
        fill: 'start',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    elements: {
      line: {
        tension: 0.2,
      },
      point: {
        borderWidth: 2,
        radius: 5,
        hoverRadius: 6,
        hoverBorderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          pointStyle: 'circle',
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            console.log(context);
            const unit =
              context.dataset.label === 'Wind' ? 'm/s' : 'kWh/m^2/day';

            return `${context.dataset.label}: ${
              context.dataset.data[context.dataIndex]
            } ${unit}`;
          },
          labelPointStyle: () => {
            return {
              pointStyle: 'circle',
              rotation: 1,
            };
          },
        },
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
        },
      },
    },
    // scales: {
    //   x: {
    //     display: true,
    //     title: {
    //       display: true,
    //       text: 'Month',
    //     },
    //   },
    //   y: {
    //     display: true,
    //     title: {
    //       display: true,
    //       text: 'Value',
    //     },
    //   },
    // },
  };

  return (
    <Box
      height="100%"
      sx={{
        m: 'auto',
      }}
    >
      <Line data={data} options={options} />
    </Box>
  );
};
export default DetailsChartRegion;
