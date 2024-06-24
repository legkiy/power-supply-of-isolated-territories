import { createTheme } from '@mui/material';

export const navBarSize = {
  desktop: 130,
  mobile: 180,
};

export const appBarSize = {
  desktop: 64,
  mobile: 56,
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    smd: true;
  }
  interface Palette {
    gold: Palette['primary'];
  }

  interface PaletteOptions {
    gold?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#365c74',
    },
    success: {
      main: '#36e223',
    },
    gold: {
      main: '#d6a11c',
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: '#fff',
        },
      },
    },

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
    MuiTypography: {
      defaultProps: {
        textTransform: 'none',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'success',
        sx: {
          '.MuiSwitch-thumb': {
            backgroundColor: '#fff',
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      textAlign: 'center',
    },
    subtitle1: {
      textAlign: 'justify',
      lineHeight: 1.2,
      letterSpacing: 0,
    },
  },
});

export default theme;
