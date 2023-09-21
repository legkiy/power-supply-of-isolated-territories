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
  barTemplateChildren?: ReactNode;
  itsTemplate?: boolean;
}

const ChartBox = ({
  chartDataSet,
  colors,
  className,
  barTemplateChildren,
  roundTemplateChildren,
  itsTemplate,
}: IProps) => {
  return (
    <div className={classNames('chart-box', className)}>
      <div className="region-title">
        <p>{chartDataSet.name}</p>
      </div>
      <RoundChart
        chartDataSet={chartDataSet}
        colors={colors}
        templateChildren={roundTemplateChildren}
        itsTemplate={itsTemplate}
      />
      <BarChart
        dataSet={chartDataSet.fuel}
        templateChildren={barTemplateChildren}
      />
    </div>
  );
};

export default memo(ChartBox);
