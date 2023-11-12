import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getLocal, setLang } from './utils';

function App() {
  useEffect(() => {
    if (getLocal()) {
      return;
    } else {
      setLang('ru');
      // const queryParams = new URLSearchParams(window.location.search);
      // queryParams.set('lang', 'ru');
      // const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      // window.history.pushState(null, '', newUrl);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
