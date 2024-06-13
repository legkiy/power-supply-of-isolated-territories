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
import { Box, Container } from '@mui/material';
import { appBarSize, navBarSize } from '@/styles/muiTheme';

const Main: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="main"
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          mt: `${appBarSize.mobile}px`,
        },
        mt: `${appBarSize.desktop}px`,
        [breakpoints.down('lg')]: {
          mx: 2,
        },
        ml: `${navBarSize.desktop}px`,
      })}
    >
      <Container
        sx={({ breakpoints }) => ({
          backgroundColor: 'white',
          [breakpoints.down('md')]: {
            px: 0.5,
          },
          px: 1,
          py: 2,
        })}
        maxWidth="lg"
      >
        <AboutInfo />
      </Container>
    </Box>
    // <main className={styles.main}>
    //   <div className={styles['main-content']}>
    //     <AboutInfo />

    //     <div className={styles.sections}>
    //       <div className={styles.section}>
    //         <ChartSection />
    //       </div>
    //       <div className={styles.section}>
    //         <MapBox />
    //       </div>
    //     </div>
    //     <div>
    //       <h4 className={styles['emissions-title']}>{t('emissions.title')}</h4>
    //       <div className={styles['emissions-section']}>
    //         <EmissionsCO2 />
    //         <div className={styles['emissions-devider']} />
    //         <Pollutants />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};
export default Main;
