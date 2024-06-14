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
          maxWidth: '1300px',
          py: 1,
          px: 1,
        })}
        maxWidth={false}
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
        <h4 className={styles['emissions-title']}>{t('emissions.title')}</h4>
        <Stack
          spacing={1}
          direction={'row'}
          sx={({ breakpoints }) => ({
            [breakpoints.down('lg')]: {
              overflowX: 'scroll',
            },
            position: 'relative',
          })}
        >
          <Box
            sx={({ breakpoints }) => ({
              width: '50%',
              [breakpoints.down('lg')]: {
                width: '100%',
              },
            })}
          >
            <EmissionsCO2 />
          </Box>
          <Box
            sx={({ breakpoints }) => ({
              width: '50%',
              [breakpoints.down('lg')]: {
                width: '100%',
              },
            })}
          >
            <Pollutants />
          </Box>
        </Stack>
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
