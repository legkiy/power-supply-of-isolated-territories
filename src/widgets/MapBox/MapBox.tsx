import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './mapBox.module.scss';
import { FC } from 'react';
import ZoomController from './ZoomController';
import { useTranslation } from 'react-i18next';
import MapLayer from './MapLayer';
import { useAppSelector } from '@/store';
import MapControlLayers from './MapControlLayers';

const legend = [
  { title: '500kV', color: '#ed4543' },
  { title: '220kV', color: '#177bc9' },
  { title: '110kV', color: '#56db40' },
  { title: 'DFO', color: '#eecac5' },
  { title: 'SFO', color: '#c9daea' },
];

const MapBox: FC = () => {
  const { t, i18n } = useTranslation();
  const layers = useAppSelector((store) => store.map.layers);
  return (
    <div className={styles['map-box']}>
      <MapContainer
        center={[66.23, 110.98]}
        zoom={3}
        className={styles.map}
        whenReady={() => {
          document.querySelector('.leaflet-control-attribution')?.remove();
        }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://www.google.${
            i18n.language === 'ru' ? 'ru' : 'cn'
          }/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}`}
          // url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <MapControlLayers />
        <ZoomController />
        {layers.map((el) => el.active && <MapLayer key={el.name} {...el} />)}
      </MapContainer>
      <div className={styles.legends}>
        <h4>{t('mapLegend.title')}</h4>
        <div className={styles['legends-body']}>
          {legend.map((el) => (
            <p key={el.title}>
              <span
                style={{
                  backgroundColor: el.color,
                }}
              />
              - {t(`mapLegend.${el.title}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MapBox;
