import { useEffect } from 'react';
import './yamap.scss';

const YaMap = () => {
  const source =
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab662dbc7c00a00378f1518157f746b9fd6c38d1b3bfa14e88a2005e65fa33b0f&amp;width=100%&amp;height=100%&amp;lang=en_FR&amp;scroll=true';

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

export default YaMap;
