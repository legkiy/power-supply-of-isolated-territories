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
import { chartColors } from './EmissionsChart/data/emissionsData';
import MapBox from '../MapBox/MapBox';

export const chartsLegends = [
  { text: 'до 200 чел.', backgroundColor: '#365C74' },
  { text: '200 - 500 чел.', backgroundColor: '#a855ce' },
  { text: '500 - 1000 чел.', backgroundColor: '#83A848' },
  { text: 'более 1000 чел.', backgroundColor: '#B5884E' },
];

const MainContent = () => {
  const { chartData } = useSelector((state: IRootState) => state.chartData);
  const legendEmissionsData = Object.entries(chartColors).map(
    (el) =>
      el[0] !== 'ВСЕГО' &&
      el[0] !== 'бензин' &&
      el[0] !== 'дизельное' && {
        name: el[0],
        color: el[1],
      }
  );

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
              <div className="sticky-box">
                <MapBox />
                {/* <YaMap /> */}
                {/* <div className="emissions-legend__title">
                  <h4>Условные обозначения графиков выбросов</h4>
                  <div className="emissions-legend">
                    {legendEmissionsData.map(
                      (el) =>
                        el && (
                          <p>
                            <span
                              className="emissions-legend__color"
                              style={{
                                backgroundColor: el.color,
                              }}
                            />
                            {el.name}
                          </p>
                        )
                    )}
                  </div>
                </div> */}
              </div>
              {/* <EmissionsChart /> */}
            </div>
          </div>
          <div className="emissions-charts-box">
            <div>
              <div
                style={{
                  display: 'flex',
                }}
              >
                <h4
                  style={{
                    width: '500px',
                    marginLeft: 'auto',
                    marginRight: '30px',
                  }}
                >
                  {local.emissions.title}
                </h4>
                <div className="emissions-legend__title">
                  <h5>{local.regions.legend}</h5>
                  <div className="emissions-legend">
                    {legendEmissionsData.map(
                      (el) =>
                        el && (
                          <p key={el.name}>
                            <span
                              className="emissions-legend__color"
                              style={{
                                backgroundColor: el.color,
                              }}
                            />
                            {el.name}
                          </p>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="emissions-charts-wrapper">
                <EmissionsChart />
                <AllEmissionsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(MainContent);
