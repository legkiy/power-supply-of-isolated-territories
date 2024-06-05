/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FeatureGroup,
  MapContainer,
  TileLayer,
  GeoJSON,
  GeoJSONProps,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L, { MarkerCluster } from 'leaflet';
import styles from './mapBox.module.scss';
import { FC } from 'react';
import ZoomController from './ZoomController';
import regionsData from '@/assets/mapData/regions.json';
import lineData from '@/assets/mapData/line.json';
import pointsData from '@/assets/mapData/points.json';
import pointsAir from '@/assets/mapData/pointsAir.json';
import markerPng from '/marker.png';
import markerAir from '/windIcon.svg';
import windsClasterIcon from '/windsClasterIcon.svg';
import { Feature, Geometry } from 'geojson';
import { useTranslation } from 'react-i18next';
import MapLayer from './MapLayer';

const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: styles['custom-marker'],
    iconSize: L.point(25, 25, true),
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onEachFeature = (feature: Feature<Geometry, any>, layer: L.Layer) => {
  const description = feature.properties?.description;
  const iconCaption = feature.properties?.iconCaption;
  // layer.options.fillColor = feature.properties?.fill;
  if (description) {
    layer.bindPopup(description); // Popup
  }

  if (iconCaption) {
    layer.bindTooltip(iconCaption, {
      // permanent: true,
    });
  }
};
const legend = [
  { title: '500kV', color: '#ed4543' },
  { title: '220kV', color: '#177bc9' },
  { title: '110kV', color: '#56db40' },
  { title: 'DFO', color: '#eecac5' },
  { title: 'SFO', color: '#c9daea' },
];

// function convertNegativeValues(arrayOfArrays: number[][]) {
//   return JSON.stringify(
//     arrayOfArrays.map((innerArray) => {
//       return innerArray.map((value) => {
//         if (value < 0) {
//           return 360 + value;
//         }
//         return value;
//       });
//     })
//   );
// }

const _markerIcon = new L.Icon({
  iconUrl: markerPng,
  iconSize: [30, 30],
});

const MapBox: FC = () => {
  const { t } = useTranslation();
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
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          // url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <ZoomController />
        <FeatureGroup>
          <GeoJSON
            data={regionsData as GeoJSONProps['data']}
            onEachFeature={onEachFeature}
            pointToLayer={(_point, latlng) =>
              L.marker(latlng, {
                icon: _markerIcon,
              })
            }
            style={(f) => {
              const properties = f?.properties;
              return {
                weight: properties?.['stroke-width'],
                color: properties?.stroke,
                fillColor: properties?.fill,
              };
            }}
          />
        </FeatureGroup>
        <FeatureGroup>
          <GeoJSON
            data={lineData as GeoJSONProps['data']}
            onEachFeature={onEachFeature}
            pointToLayer={(_point, latlng) =>
              L.marker(latlng, {
                icon: _markerIcon,
              })
            }
            style={(f) => {
              const properties = f?.properties;
              return {
                weight: properties?.['stroke-width'],
                color: properties?.stroke,
                fillColor: properties?.fill,
              };
            }}
          />
        </FeatureGroup>
        <FeatureGroup>
          <MarkerClusterGroup
            iconCreateFunction={createClusterCustomIcon}
            polygonOptions={{ fill: false, stroke: false }}
            maxClusterRadius={30}
          >
            <GeoJSON
              data={pointsData as GeoJSONProps['data']}
              onEachFeature={onEachFeature}
              pointToLayer={(_point, latlng) =>
                L.marker(latlng, {
                  icon: _markerIcon,
                })
              }
              style={(f) => {
                const properties = f?.properties;
                return {
                  weight: properties?.['stroke-width'],
                  color: properties?.stroke,
                  fillColor: properties?.fill,
                };
              }}
            />
          </MarkerClusterGroup>
        </FeatureGroup>
        {/* <FeatureGroup>
          <MarkerClusterGroup
            iconCreateFunction={customClusterIcon({
              icon: windsClasterIcon,
              size: 35,
            })}
            polygonOptions={{ fill: false, stroke: false }}
            maxClusterRadius={50}
          >
            <GeoJSON
              data={pointsAir as GeoJSONProps['data']}
              onEachFeature={onEachFeature}
              pointToLayer={markerIcon({ icon: markerAir, size: 25 })}
              style={(f) => {
                const properties = f?.properties;
                return {
                  weight: properties?.['stroke-width'],
                  color: properties?.stroke,
                  fillColor: properties?.fill,
                };
              }}
            />
          </MarkerClusterGroup>
        </FeatureGroup> */}
        <MapLayer
          data={pointsAir as GeoJSONProps['data']}
          clusterIcon={windsClasterIcon}
          pointIcon={markerAir}
        />

        {/* <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createClusterCustomIcon}
        >
          {(data as DataType[]).map((el) => (
            <Marker position={[+el.lat, +el.long]} key={el.title}>
              <Popup>
                <p>{'dsasad \n saddas'}</p>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup> */}
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
