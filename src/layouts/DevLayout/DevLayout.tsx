import { Container, Paper, Stack } from '@mui/material';
import { appBarSize, navBarSize } from '@/styles/muiTheme';
import { LoadNasaForm } from './components';
import { MapBox } from '@/widgets';

const DevLayout = () => {
  //TODO: сделать выделение области на карте
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
            mx: 0,
            p: 1,
          },
          ml: `${navBarSize.desktop}px`,
          p: 2,
          minHeight: `calc(100vh - ${appBarSize.desktop}px - 50px)`,
        })}
      >
        <Stack spacing={2}>
          {/* <LoadNasaData /> */}
          <LoadNasaForm />
          <MapBox />
        </Stack>
      </Paper>
    </Container>
  );
};
export default DevLayout;
