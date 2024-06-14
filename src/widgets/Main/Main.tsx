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
import { Box, Container, Grid, Stack } from '@mui/material';
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
          py: 1,
          px: 1,
          maxWidth: 1300,
        })}
        maxWidth="xl"
        disableGutters
      >
        <AboutInfo />
        <Grid container spacing={1}>
          <Grid item lg={7.5} xs={12}>
            <ChartSection />
          </Grid>
          <Grid item lg={4.5} xs={12}>
            <MapBox />
          </Grid>
        </Grid>
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
