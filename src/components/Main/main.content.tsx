import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import { IPopulations } from './ChartsBox/data/interfaces';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import ChartsBox from './ChartsBox';
import { memo } from 'react';
import ChartTemplate from './ChartsBox/ChartTemplate';
import local from '../../locale';
import EmissionsChart from './EmissionsChart';
import AllEmissionsChart from './AllEmissionsChart';

export const chartsLegends = [
  { text: 'до 200 чел.', backgroundColor: '#365C74' },
  { text: '200 - 500 чел.', backgroundColor: '#a855ce' },
  { text: '500 - 1000 чел.', backgroundColor: '#83A848' },
  { text: 'более 1000 чел.', backgroundColor: '#B5884E' },
];

const MainContent = () => {
  const { chartData } = useSelector((state: IRootState) => state.chartData);

  return (
    <main className="main">
      <div className="main-content">
        <Menu />
        <div style={{ width: '100%' }}>
          <div className="title-wrapper">
            <h1 className="title">{local.title}</h1>
            <p className="title-description">{local.description}</p>
          </div>
          <div className="main-wrapper">
            <div className="left-side">
              {/* <p>Внешнее кольцо - численность населения</p>
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
              </div> */}
              <div className="chart-wrapper">
                <ChartTemplate />
                {(chartData as IPopulations[]).map((el, index) => (
                  <ChartsBox
                    key={index}
                    chartDataSet={el}
                    colors={chartsLegends.map((el) => el.backgroundColor)}
                  />
                ))}
              </div>
            </div>
            <div className="right-side">
              <YaMap />
              <EmissionsChart />
              <AllEmissionsChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(MainContent);
