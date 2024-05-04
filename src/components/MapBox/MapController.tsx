import { useMap } from 'react-leaflet';
import './mapController.scss'

const MapController = () => {
  const map = useMap();

  const handaleZoomIn = () => {
    map.zoomIn();
  };

  return (
    <div className='map-controller'>
      <button onClick={handaleZoomIn}>in</button>
    </div>
  );
};
export default MapController;
