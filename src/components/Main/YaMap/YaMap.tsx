import { memo, useEffect } from 'react';
import './yamap.scss';

const YaMap = () => {
  const source =
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A725c6450b45928ca4e969ed7b3fe106477389448eedf0fd6ceae1e496ad5e629&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
  // 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A645110aea2a95df11af1266b1cd4b580abe9f75126d4c377c95dc4af8f5ec371&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true';
  // 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A019593789f0e7e58dab360fe7955aa9de7feb2c9be97691a41b3b242796eec0a&amp;width=100%&amp;height=100%&amp;lang=en_FR&amp;scroll=true';
  // 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab662dbc7c00a00378f1518157f746b9fd6c38d1b3bfa14e88a2005e65fa33b0f&amp;width=100%&amp;height=100%&amp;lang=en_FR&amp;scroll=true';

  useEffect(() => {
    const mapContainer = document.querySelector('.ya-map');
    if (!!mapContainer) {
      mapContainer.innerHTML = '';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = source;
      script.async = true;
      mapContainer.appendChild(script);
    }
  }, []);
  return (
    <div className="ya-map-wrapper">
      <div className="ya-map"></div>
    </div>
  );
};

export default memo(YaMap);
