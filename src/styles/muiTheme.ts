import { createTheme } from '@mui/material';

export const navBarWidth = 180;

const theme = createTheme({
  palette: {
    primary: {
      main: '#365c74',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       minHeight: 'auto',
    //     },
    //   },
    // },

    MuiLink: {
      styleOverrides: {
        root: {
          color: 'white',
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  },
});

export default theme;
