import { Container, Paper, Stack } from '@mui/material';
import { appBarSize, navBarSize } from '@/styles/muiTheme';
import { LoadNasaData, LoadNasaForm } from './components';
import { MapBox } from '@/widgets';
import { useEffect } from 'react';
import axios from 'axios';

const DevLayout = () => {
  // useEffect(() => {
  //   axiosInstanse.get('/').then(console.log);
  // }, []);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_PYTHON_API_URL + '/api/test', {})
      .then(console.log);
  }, []);
  return (
    <Container
      sx={({ breakpoints }) => ({
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
      <Paper
        sx={({ breakpoints }) => ({
          [breakpoints.down('sm')]: {
            mt: `${appBarSize.mobile}px`,
          },
          mt: `${appBarSize.desktop}px`,
          [breakpoints.down('lg')]: {
            mx: 2,
          },
          ml: `${navBarSize.desktop}px`,
          p: 2,
          minHeight: `calc(100vh - ${appBarSize.desktop}px - 50px)`,
        })}
      >
        <Stack spacing={2}>
          <LoadNasaData />
          <LoadNasaForm />
          <MapBox />
        </Stack>
      </Paper>
    </Container>
  );
};
export default DevLayout;
