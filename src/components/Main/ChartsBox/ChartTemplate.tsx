import { FC } from 'react';
import ChartsBox from '.';
import { chartsLegends } from '../main.content';
import { templateData } from './data/data';
import './chartTemplate.scss';

const ChartTemplate: FC = () => {
  return (
    <>
      <ChartsBox
        chartDataSet={templateData}
        colors={chartsLegends.map((el) => el.backgroundColor)}
        className="chart-template"
        roundTemplateChildren={
          <svg className="round-legend">
            <rect></rect>
          </svg>
        }
      />
    </>
  );
};
export default ChartTemplate;
