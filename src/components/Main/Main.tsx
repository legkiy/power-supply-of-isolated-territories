import Menu from './Menu/Menu';
import YaMap from './YaMap/YaMap';
import './main.scss';
import { getHeight } from '../../utils/getHeight';
import { useEffect, useState } from 'react';

const Main = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    setHeaderHeight(getHeight('header') + getHeight('footer'));
  }, [getHeight('header')]);

  return (
    <main className="main" style={{ height: `calc(100% - ${headerHeight}px)` }}>
      <Menu />
      asddas
      <YaMap />
    </main>
  );
};

export default Main;
