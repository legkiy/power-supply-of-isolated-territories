import { Provider } from 'react-redux';
import BaseLayout from './layouts/BaseLayout/BaseLayout';

import { store } from './store';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
