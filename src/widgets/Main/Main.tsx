import { FC } from 'react';
import styles from './main.module.scss';
import {
  ChartSection,
  MapBox,
  AboutInfo,
  EmissionsCO2,
  Pollutants,
} from '@/widgets';
import { useTranslation } from 'react-i18next';

const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div className={styles['main-content']}>
        <AboutInfo />

        <div className={styles.sections}>
          <div className={styles.section}>
            <ChartSection />
          </div>
          <div className={styles.section}>
            <MapBox />
          </div>
        </div>
        <div>
          <h4 className={styles['emissions-title']}>{t('emissions.title')}</h4>
          <div className={styles['emissions-section']}>
            <EmissionsCO2 />
            <div className={styles['emissions-devider']} />
            <Pollutants />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
