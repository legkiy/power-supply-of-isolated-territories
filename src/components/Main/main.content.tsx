import ChartBox from './ChartsBox/ChartBox';
import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';

const MainContent = () => {
  return (
    <main className="main">
      <div className="main-content">
        <Menu />
        <div className="left-side">
          <ChartBox />
        </div>
        <div className="right-side">
          <YaMap />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
