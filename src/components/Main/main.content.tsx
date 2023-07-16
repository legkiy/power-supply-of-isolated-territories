import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import { IPopulations } from './ChartsBox/data/interfaces';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import ChartBox from './ChartsBox';

const MainContent = () => {
  const { chartData } = useSelector((state: IRootState) => state.chartData);

  const chartsLegends = [
    { text: 'до 200 чел.', backgroundColor: '#365C74' },
    { text: '200 - 500 чел.', backgroundColor: '#5B3A7A' },
    { text: '500 - 1000 чел.', backgroundColor: '#83A848' },
    { text: 'более 1000 чел.', backgroundColor: '#B5884E' },
  ];
  return (
    <main className="main">
      <div className="main-content">
        <Menu />
        <div>
          <div className="title-wrapper">
            <h1 className="title">
              Мониторинг выбросов диоксида углерода от энергетических объектов
              на изолированных труднодоступных территориях в восточных регионах
              РФ{' '}
            </h1>
          </div>
          <div className="main-wrapper">
            <div className="left-side">
              <p>Внешнее кольцо - численность населения</p>
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
                {(chartData as IPopulations[]).map((el, index) => (
                  <ChartBox
                    key={index}
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
        </div>
      </div>
    </main>
  );
};

export default MainContent;
