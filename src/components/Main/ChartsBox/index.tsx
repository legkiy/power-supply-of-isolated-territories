import RoundChart from './RoundChart';
import { IPopulations } from './data/interfaces';
import BarChart from './BarChart';
import { ReactNode, memo } from 'react';
import classNames from 'classnames';
import './charts.scss';

interface IProps {
  chartDataSet: IPopulations;
  colors: string[];
  className?: string;
  roundTemplateChildren?: ReactNode;
  itsTemplate?: boolean;
  legendColors?: ReactNode;
}

const ChartBox = ({
  chartDataSet,
  colors,
  className,
  roundTemplateChildren,
  itsTemplate,
  legendColors,
}: IProps) => {
  return (
    <div className={classNames('chart-box', className)}>
      <div
        className={classNames('region-title', {
          'region-title__template': itsTemplate,
        })}
      >
        <p>{chartDataSet.name}</p>
        {legendColors}
      </div>
      <RoundChart
        chartDataSet={chartDataSet}
        colors={colors}
        templateChildren={roundTemplateChildren}
        itsTemplate={itsTemplate}
      />
      <BarChart
        dataSet={chartDataSet.fuel}
        // legendColors={legendColors}
        itsTemplate={itsTemplate}
      />
    </div>
  );
};

export default memo(ChartBox);
