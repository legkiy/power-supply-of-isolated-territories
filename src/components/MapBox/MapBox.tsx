import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  Tooltip,
  FeatureGroup,
  GeoJSON,
  ZoomControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L, { MarkerCluster } from 'leaflet';
import tempData from './data/template.json';
import marksData from './data/marksTemplate.json';
import plygonsData from './data/polygonsTemplate.json';
import sfoDfo from './data/SFO_DFO.json';

import markerPng from 'src/images/marker.png';
import './mapBox.scss';
import { Feature, Geometry } from 'geojson';
import MapController from './MapController';

type PupupMapType = {
  title: string;
  description: string;
};

type TooltipMapType = {
  sticky: boolean;
  permanent: boolean;
  title: string;
  description: string;
};

type MarkType = {
  long: string | number;
  lat: string | number;
  popup: PupupMapType;
  tooltip: Omit<TooltipMapType, 'sticky'>;
};

type PoligonType = {
  position: L.LatLngExpression[];
  popup: PupupMapType;
  tooltip: TooltipMapType;
};

type DataType = {
  marks: MarkType[];
  polygons: PoligonType[];
};

const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker',
    iconSize: L.point(33, 33, true),
  });
};

const markerIcon = new L.Icon({
  iconUrl: markerPng,
  iconSize: [35, 35],
});

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

const MapBox = () => {
  return (
    <MapContainer
      center={[62.52476050655558, 114.08783427834389]}
      zoom={3}
      style={{
        width: '460px',
        height: '600px',
        borderRadius: 5,
      }}
      whenReady={() =>
        document.querySelector('.leaflet-control-attribution')?.remove()
      }
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      />
      {/* <ZoomControl position="topright" /> */}
      <MapController />

      <FeatureGroup>
        <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createClusterCustomIcon}
        >
          <GeoJSON
            //@ts-ignore
            data={sfoDfo}
            pointToLayer={(point, latlng) =>
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
            onEachFeature={onEachFeature}
          />
        </MarkerClusterGroup>
      </FeatureGroup>

      {/* <MarkerClusterGroup
        showCoverageOnHover={false}
        iconCreateFunction={createClusterCustomIcon}
      >
        {(marksData as MarkType[]).map((mark) => (
          <Marker position={[+mark.lat, +mark.long]} icon={markerIcon}>
            {mark.popup && (
              <Popup>
                <pre>
                  {mark.popup.title}
                  <br />
                  {mark.popup.description}
                </pre>
              </Popup>
            )}
            {mark?.tooltip && (
              <Tooltip permanent={mark.tooltip.permanent}>
                {mark.tooltip.description}
              </Tooltip>
            )}
          </Marker>
        ))}
      </MarkerClusterGroup>
      {(plygonsData as PoligonType[]).map((polygon) => (
        <Polygon
          pathOptions={{
            color: 'red',
          }}
          positions={polygon.position}
        >
          {polygon.popup && (
            <Popup>
              <pre>
                {polygon.popup.title}
                <br />
                {polygon.popup.description}
              </pre>
            </Popup>
          )}
          {polygon.tooltip && (
            <Tooltip
              sticky={polygon.tooltip.sticky}
              permanent={polygon.tooltip.permanent}
            >
              {polygon.tooltip.title}
            </Tooltip>
          )}
        </Polygon>
      ))} */}
    </MapContainer>
  );
};
export default MapBox;
