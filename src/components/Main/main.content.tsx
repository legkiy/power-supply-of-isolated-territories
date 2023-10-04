import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import { IPopulations } from './ChartsBox/data/interfaces';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import ChartsBox from './ChartsBox';
import { memo } from 'react';
import { templateData } from './ChartsBox/data/data';
import ChartTemplate from './ChartsBox/ChartTemplate';

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
        <div>
          <div className="title-wrapper">
            <h1 className="title">
              Мониторинг выбросов диоксида углерода от энергетических объектов
              на изолированных труднодоступных территориях в восточных регионах
              РФ
            </h1>
            <p className="title-description">
              Разработанная информационно-аналитическая система предназначена
              для мониторинга изменения выбросов диоксида углерода от
              энергетических объектов на изолированных от энергосистем
              труднодоступных территориях восточных регионов РФ при реализации
              различных сценариев декарбонизации. Информация представлена из
              созданной базы данных технико-экономических и производственных
              показателей электростанций и котельных, обеспечивающих
              энергоснабжение этой категории потребителей, и расчетных оценок
              выбросов в атмосферу диоксида углерода на основе разработанной
              математической модели
            </p>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default memo(MainContent);
