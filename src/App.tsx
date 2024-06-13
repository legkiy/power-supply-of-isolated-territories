import { Provider } from 'react-redux';
import BaseLayout from './layouts/BaseLayout/BaseLayout';

import { store } from './store';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/muiTheme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BaseLayout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
