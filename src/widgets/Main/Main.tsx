import { FC } from 'react';
import styles from './main.module.scss';
import {
  ChartSection,
  MapBox,
  AboutInfo,
  EmissionsCO2,
  Pollutants,
} from '@/widgets';

const Main: FC = () => {
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
        <div className={styles['emissions-section']}>
          <EmissionsCO2 />
          <div className={styles['emissions-devider']} />
          <Pollutants />
        </div>
      </div>
    </main>
  );
};
export default Main;
