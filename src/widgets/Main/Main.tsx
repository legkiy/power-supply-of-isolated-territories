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
import { Box, Container, useMediaQuery } from '@mui/material';
import theme, { navBarWidth } from '@/styles/muiTheme';

const Main: FC = () => {
  const { t } = useTranslation();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const mt = !matchesSM ? `${60}px` : `${54}px`;

  return (
    <Box
      component="main"
      sx={{
        mt: !matchesSM ? `${60}px` : `${54}px`,
        ml: !matchesLG ? `${navBarWidth}px` : '0px',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'white',
        }}
        maxWidth="lg"
      >
        dsadsa
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
