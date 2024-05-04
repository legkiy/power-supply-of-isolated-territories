import { Provider } from 'react-redux';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  );
  // return <MainLayout />;
}

export default App;
