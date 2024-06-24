import { FeatureGroup, GeoJSON, GeoJSONProps } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { customClusterIcon, markerIcon } from '@/share/utils/createMapIcons';
import { Feature, Geometry } from 'geojson';
import { FC } from 'react';
import styles from './mapLayer.module.scss';
import markerPng from '/marker.png';
import { IMapLayer } from '@/store/mapSlice/mapSlice';
import { useActions } from '@/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onEachFeature = (feature: Feature<Geometry, any>, layer: L.Layer) => {
  const { description, iconCaption, tooltipPermament } = feature.properties;
  // layer.options.fillColor = feature.properties?.fill;
  if (description) {
    layer.bindPopup(description); // Popup
  }

  if (iconCaption) {
    layer.bindTooltip(iconCaption, {
      permanent: tooltipPermament,
    });
  }
};

const MapLayer: FC<IMapLayer> = ({
  marker = markerPng,
  data,
  clusterMarker,
  disableCluster = false,
}) => {
  const actions = useActions();

  return (
    <FeatureGroup
      eventHandlers={{
        click: (e) => {
          actions.setCoords({
            lat: e.latlng.lat,
            lng: e.latlng.lng,
          });
        },
      }}
    >
      <MarkerClusterGroup
        iconCreateFunction={customClusterIcon({
          icon: clusterMarker,
          size: 35,
          className: styles['custom-marker'],
        })}
        polygonOptions={{ fill: false, stroke: false }}
        maxClusterRadius={disableCluster ? 0 : 50}
      >
        <GeoJSON
          data={data as GeoJSONProps['data']}
          onEachFeature={onEachFeature}
          pointToLayer={markerIcon({ icon: marker, size: 25 })}
          style={(f) => {
            const properties = f?.properties;

            return {
              weight: properties?.['stroke-width'],
              color: properties?.stroke,
              fillColor: properties?.fill,
              opacity: properties?.['stroke-opacity'],
            };
          }}
        />
      </MarkerClusterGroup>
    </FeatureGroup>
  );
};
export default MapLayer;
