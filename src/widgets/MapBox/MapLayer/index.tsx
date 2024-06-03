import { FeatureGroup, GeoJSON, GeoJSONProps } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { customClusterIcon, markerIcon } from '@/share/utils/createMapIcons';
import { Feature, Geometry } from 'geojson';
import { FC } from 'react';
import styles from './mapLayer.module.scss';

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

interface MapLayer {
  pointIcon?: string;
  clusterIcon?: string;
  data: GeoJSONProps['data'];
}

const MapLayer: FC<MapLayer> = ({ pointIcon, data, clusterIcon }) => {
  return (
    <FeatureGroup>
      <MarkerClusterGroup
        iconCreateFunction={customClusterIcon({
          icon: clusterIcon,
          size: 35,
          className: styles['custom-marker'],
        })}
        polygonOptions={{ fill: false, stroke: false }}
        maxClusterRadius={50}
      >
        <GeoJSON
          data={data}
          onEachFeature={onEachFeature}
          pointToLayer={markerIcon({ icon: pointIcon, size: 25 })}
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
  );
};
export default MapLayer;
