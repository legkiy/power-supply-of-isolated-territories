/* eslint-disable @typescript-eslint/no-unused-vars */
import { FeatureGroup, MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import setyle from './mapBox.module.scss';
import { FC } from 'react';
import ZoomController from './ZoomController';
import mapData from '@/assets/mapData/SFO_DFO.json';
import markerPng from '/marker.png';
import { Feature, Geometry } from 'geojson';

// type DataType = {
//   long: string | number;
//   lat: string | number;
//   title: string;
//   description: string;
// };

// const createClusterCustomIcon = function (cluster: MarkerCluster) {
//   return L.divIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: setyle['custom-marker'],
//     iconSize: L.point(33, 33, true),
//   });
// };

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

const MapBox: FC = () => {
  const markerIcon = new L.Icon({
    iconUrl: markerPng,
    iconSize: [35, 35],
  });
  return (
    <div className={setyle['map-box']}>
      <MapContainer
        center={[66.23, 110.98]}
        zoom={3}
        className={setyle.map}
        whenReady={() => {
          document.querySelector('.leaflet-control-attribution')?.remove();
        }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <ZoomController />
        <FeatureGroup>
          <MarkerClusterGroup>
            <GeoJSON
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              data={mapData}
              onEachFeature={onEachFeature}
              pointToLayer={(_point, latlng) =>
                L.marker(latlng, {
                  icon: markerIcon,
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
    </div>
  );
};
export default MapBox;
