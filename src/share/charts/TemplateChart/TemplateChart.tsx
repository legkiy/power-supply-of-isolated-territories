import templatesData from '@/assets/chartsData/templateData.json';
import { ChartDataset } from 'chart.js';
import { useTranslation } from 'react-i18next';
import { BarChart, RingChart } from '..';
import {
  fuelColors,
  settlementsColors,
  settlementsColorsLabels,
} from '../colors';
import { Card } from '@/share/UI';
import styles from './templateChart.module.scss';
import { FC, useMemo, useState } from 'react';
import clsx from 'clsx';

const TemplateChart: FC = () => {
  const t = useTranslation().t;

  const [hoverOuterRing, setHoverOuterRing] = useState(false);
  const [hoverInnerRing, setHoverInnerRing] = useState(false);
  const [hoverBarText, setHoverBarText] = useState(false);

  const series: {
    settlements: ChartDataset<'doughnut', number[]>[];
    fuel: ChartDataset<'bar', number[]>[];
  } = {
    settlements: [
      {
        label: t('regions.population'),
        data: templatesData.settlements.map((s) => s.population),
        backgroundColor: settlementsColors,
      },
      {
        label: t('regions.settlements'),
        data: templatesData.settlements.map((s) => s.settlements),
        backgroundColor: settlementsColors,
      },
    ],

    fuel: [
      {
        label: '1',
        data: templatesData.fuel.map((f) => f.data),
        backgroundColor: fuelColors,
      },
    ],
  };

  const fuelLabels = useMemo(
    () => templatesData.fuel.map((f) => t(`fuel.${f.label}`)),
    [t]
  );

  return (
    <Card
      title={
        <div>
          <h5 className={styles.title}>{t('templateText.legend')}</h5>
          <h5 className={styles.title}>{t('templateText.gradations')}</h5>

          <div className={styles['legend-colors']}>
            {settlementsColorsLabels.map((cl) => (
              <p className={styles['legend-item']} key={cl.color}>
                <span
                  style={{
                    backgroundColor: cl.color,
                    width: '12px',
                    height: '10px',
                    display: 'inline-block',
                    borderRadius: '2px',
                  }}
                />{' '}
                {t(`settlements.${cl.label}`)}
              </p>
            ))}
          </div>
        </div>
      }
      style={{ width: '38.7%' }}
    >
      <div
        style={{
          width: '142px',
        }}
      >
        <div
          style={{
            position: 'relative',
          }}
        >
          <RingChart series={series.settlements} />
          {/* внешний круг */}
          <div
            className={clsx(
              styles['template-hover-ring'],
              styles['outer-ring']
            )}
            style={{
              boxShadow: hoverOuterRing
                ? 'inset 0px 0px 0px 14px rgba(0, 123, 255, 0.2)'
                : 'none',
            }}
          />
          <p
            className={clsx(
              styles['template-line'],
              styles['template-line__outer-ring']
            )}
          >
            {'            '}
          </p>
          <div
            className={clsx(styles['template-text'], styles['outer-ring-text'])}
            onMouseOver={() => setHoverOuterRing(true)}
            onMouseOut={() => setHoverOuterRing(false)}
          >
            {t('templateText.populationGradation')}
          </div>
          {/* число в центре */}
          <p
            className={clsx(
              styles['template-line'],
              styles['template-line__sum-settlements']
            )}
          >
            {'                    '}
          </p>
          <div
            className={clsx(styles['template-text'], styles['sum-settlements'])}
          >
            {t('templateText.sumSettlements')}
          </div>
          {/* внутренний круг */}
          <div
            className={clsx(
              styles['template-hover-ring'],
              styles['inner-ring']
            )}
            style={{
              boxShadow: hoverInnerRing
                ? 'inset 0px 0px 0px 14px rgba(0, 123, 255, 0.2)'
                : 'none',
            }}
          />
          <p
            className={clsx(
              styles['template-line'],
              styles['template-line__inner-ring']
            )}
          >
            {'                   '}
          </p>
          <div
            className={clsx(styles['template-text'], styles['inner-ring-text'])}
            onMouseOver={() => setHoverInnerRing(true)}
            onMouseOut={() => setHoverInnerRing(false)}
          >
            {t('templateText.settlementsGradation')}
          </div>
          {/* число снизу */}
          <p
            className={clsx(
              styles['template-line'],
              styles['template-line__sum-population']
            )}
          >
            {'                         '}
          </p>
          <div
            className={clsx(styles['template-text'], styles['sum-population'])}
          >
            {t('templateText.sumPopulation')}
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            border: '1px solid black',
            borderRadius: '10px',
            boxShadow: hoverBarText
              ? 'inset 0px 0px 0px 100px rgba(0, 123, 255, 0.2)'
              : 'none',
          }}
        >
          <BarChart series={series.fuel} labels={fuelLabels} />
          <p
            className={clsx(
              styles['template-line'],
              styles['template-line__bar']
            )}
          >
            {'      '}
          </p>
          <div
            className={clsx(
              styles['template-text'],
              styles['fuel-consumption']
            )}
            onMouseOver={() => setHoverBarText(true)}
            onMouseOut={() => setHoverBarText(false)}
          >
            {t('templateText.fuelConsumption')}
          </div>
        </div>
      </div>
    </Card>
  );
};
export default TemplateChart;
