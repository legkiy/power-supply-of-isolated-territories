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
        itsTemplate
        // roundTemplateChildren={
        //   <>
        //     <svg className="round-legend">
        //       <g>
        //         <path className="settelments-count-line" d="M 54 70 l 200 0" />
        //         <rect className="legend-settelments-count" x="50" y="50" />
        //       </g>
        //     </svg>
        //   </>
        // }
        legendColors={
          <div className="chart-template-legend__colors">
            {chartsLegends.map((el) => (
              <p key={el.text}>
                <span
                  className="chart-template-legend-color"
                  style={{ backgroundColor: el.backgroundColor }}
                ></span>
                {el.text}
              </p>
            ))}
          </div>
        }
      />
    </>
  );
};
export default ChartTemplate;
