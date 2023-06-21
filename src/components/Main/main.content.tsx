import ChartBox from './ChartsBox/ChartBox';
import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import SFO from './ChartsBox/data/SFO_population.json';
import DFO from './ChartsBox/data/DFO_settlements.json';
import { IPopulations } from './ChartsBox/data/interfaces';
import DoughnutChart from './ChartsBox/DoughnutChart';
import RoundChart from './ChartsBox/RoundChart';

const MainContent = () => {
  return (
    <main className="main">
      <div className="main-content">
        <Menu />
        <div className="left-side">
          <div className="ring-decoding">
            <p>Внешнее кольцо обозначает кол-во населения</p>
          </div>
          {/* <DoughnutChart chartDataSet={SFO as IPopulations[]} />
          <DoughnutChart chartDataSet={DFO as IPopulations[]} /> */}
          {(DFO as IPopulations[]).map((el) => (
            <RoundChart chartDataSet={el} />
          ))}
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
