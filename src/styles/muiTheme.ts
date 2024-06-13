import { createTheme } from '@mui/material';

export const navBarWidth = 140;
export const mobileNavBarWidth = 180;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    smd: true;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#365c74',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 760,
      md: 900,
      lg: 1200,
      xl: 1536,
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
          cursor: 'pointer',
        },
      },
    },
  },
});

export default theme;
