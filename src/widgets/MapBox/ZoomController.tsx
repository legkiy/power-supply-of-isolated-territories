import { FC, useEffect, useState } from 'react';
import { useMap, useMapEvent } from 'react-leaflet';
import Slider from 'react-slider';
import styles from './zoomController.module.scss';

interface IZoomController {}

const ZoomController: FC<IZoomController> = () => {
  const [zoom, setZoom] = useState<number>(3);
  const map = useMap();
  useMapEvent('zoomanim', (e) => {
    setZoom(e.zoom);
  });

  const handaleZoom = (_zoom: number) => {
    map.dragging.disable();
    setZoom(_zoom);
    map.dragging.enable();
  };

  useEffect(() => {
    map.setZoom(zoom);
  }, [map, zoom]);

  return (
    <div
      className={styles['zoom-controller']}
      onClick={(e) => e.stopPropagation()}
    >
      <Slider
        className={styles.slider}
        min={0}
        max={12}
        marks
        thumbClassName={styles['slider-thumb']}
        trackClassName={styles['slider-track']}
        markClassName={styles['slider-mark']}
        orientation="vertical"
        invert
        value={zoom}
        onChange={handaleZoom}
        renderThumb={(props, state) => (
          <div className={styles['slider-thumb']} {...props}>
            {state.value}
          </div>
        )}
      />
    </div>
  );
};
export default ZoomController;
