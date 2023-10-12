import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  ChartOptions,
  PointElement,
} from 'chart.js';
import { IPopulations } from './data/interfaces';
import { ChartData } from 'chart.js';
import { ReactNode, memo, useMemo, useState } from 'react';
import classNames from 'classnames';

ChartJS.register(ArcElement, Tooltip, Legend, Title, PointElement);

interface IProps {
  chartDataSet: IPopulations;
  colors: string[];
  templateChildren?: ReactNode;
  itsTemplate?: boolean;
}

const RoundChart = ({
  chartDataSet,
  colors,
  templateChildren,
  itsTemplate,
}: IProps) => {
  ChartJS.defaults.font.size = 11;
  ChartJS.defaults.color = 'black';

  const options: ChartOptions<'doughnut'> = {
    datasets: {
      doughnut: {
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: colors,
        borderAlign: 'inner',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'average',
        usePointStyle: true,
        bodyColor: '#ffffff',
      },
      title: {
        display: false,
        text: chartDataSet.name,
        padding: { top: 10 },
      },
    },
  };

  const data: ChartData<'doughnut'> = {
    datasets: [
      {
        label: 'население',
        data: chartDataSet.settlements.map((el) => el.population),
      },
      {
        label: 'нас. пунктов',
        data: chartDataSet.settlements.map((el) => el.settlements),
      },
    ],
  };

  const countOfPopulation = useMemo(
    () =>
      chartDataSet.settlements
        .map((el) => el.population)
        .reduce((prev, next) => prev + next),
    [chartDataSet]
  );

  const countOfSettlements = useMemo(
    () =>
      chartDataSet.settlements
        .map((el) => el.settlements)
        .reduce((prev, next) => prev + next),
    [chartDataSet]
  );
  const [templSettelHover, setTemplSettelHover] = useState(false);
  const [templSettelInsideHover, setTemplSettelInsideHover] = useState(false);

  return (
    <div className="round-chart">
      <Doughnut data={data} options={options} />
      {itsTemplate ? (
        <>
          <span className="count-of-settel template">
            {countOfSettlements}
            {'                   '}
            <div className="settel-template"> сумма нас. пунктов</div>
          </span>
          <span className="count-of-popul template">
            {(countOfPopulation / 1000).toFixed(0)} тыс. чел.
            <span className="template-popul">{'            '}</span>
            <div className="popul-template"> суммарное населения</div>
          </span>
          <div
            className={classNames('template-settel', {
              'template-settel_hover': templSettelHover,
            })}
          >
            <div
              className="template-settel__text"
              onMouseEnter={() => setTemplSettelHover(true)}
              onMouseLeave={() => setTemplSettelHover(false)}
            >
              <span className="template-settel__space">{'         '}</span>
              <div className="template-settel__text__desc">
                население по градациям
              </div>
            </div>
          </div>
          <div
            className={classNames('template-settel__inside', {
              'template-settel__inside__hover': templSettelInsideHover,
            })}
          >
            <div
              className="template-settel__inside__text"
              onMouseEnter={() => setTemplSettelInsideHover(true)}
              onMouseLeave={() => setTemplSettelInsideHover(false)}
            >
              <span className="template-settel__inside__space">
                {'           '}
              </span>
              <div className="template-settel__inside__text__desc">
                кол-во нас. пунктов по градациям
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className="count-of-settel">{countOfSettlements}</span>
          <span className="count-of-popul">
            {(countOfPopulation / 1000).toFixed(0)} тыс. чел.
          </span>
        </>
      )}
    </div>
  );
};

export default memo(RoundChart);
