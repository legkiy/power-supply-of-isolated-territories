import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import { IPopulations } from './ChartsBox/data/interfaces';
import RoundChart from './ChartsBox/RoundChart';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const MainContent = () => {
  const { chartData } = useSelector((state: IRootState) => state.chartData);

  const chartsLegends = [
    { text: 'до 200 чел.', backgroundColor: '#365C74' },
    { text: '200 - 500 чел.', backgroundColor: '#5B3A7A' },
    { text: '500 - 1000 чел.', backgroundColor: '#83A848' },
    { text: 'более 1000 чел.', backgroundColor: '#B5884E' },
  ];
  console.log(chartsLegends.map((el) => el.backgroundColor));

  return (
    <main className="main">
      <div className="main-content">
        <Menu />
        <div className="left-side">
          <p>Внешнее кольцо - кол-во населения</p>
          <p>Внутреннее кольцо - кол-во нас. пунктов</p>
          <div className="charts-legends">
            {chartsLegends.map((el) => (
              <>
                <p>
                  <span
                    className="legend-color"
                    style={{ backgroundColor: el.backgroundColor }}
                  ></span>
                  {el.text}
                </p>
              </>
            ))}
          </div>
          <div className="chart-wrapper">
            {(chartData as IPopulations[]).map((el) => (
              <RoundChart
                chartDataSet={el}
                colors={chartsLegends.map((el) => el.backgroundColor)}
              />
            ))}
          </div>
        </div>
        <div className="right-side">
          <YaMap />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
