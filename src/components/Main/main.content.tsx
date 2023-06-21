import ChartBox from './ChartsBox/ChartBox';
import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import { IPopulations } from './ChartsBox/data/interfaces';
import RoundChart from './ChartsBox/RoundChart';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const MainContent = () => {
  const { chartData } = useSelector((state: IRootState) => state.chartData);

  return (
    <main className="main">
      <div className="main-content">
        <Menu />
        <div className="left-side">
          <p>Внешнее кольцо - кол-во населения</p>
          <p>Внутреннее кольцо - кол-во нас. пунктов</p>
          <div className="chart-wrapper">
            {/* <DoughnutChart chartDataSet={SFO as IPopulations[]} />
          <DoughnutChart chartDataSet={DFO as IPopulations[]} /> */}
            {(chartData as IPopulations[]).map((el) => (
              <RoundChart chartDataSet={el} />
            ))}
          </div>
          {/* <ChartBox chartDataSet={SFO as IPopulations[]} />
          <ChartBox chartDataSet={DFO as IPopulations[]} /> */}
        </div>
        <div className="right-side">
          <YaMap />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
