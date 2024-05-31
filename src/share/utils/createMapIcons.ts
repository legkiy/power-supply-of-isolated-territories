import L, { MarkerCluster } from 'leaflet';
import { Feature, Point } from 'geojson';

export const markerIcon = (icon: string, size: number = 30) => {
  const iconDiv = new L.Icon({
    iconUrl: icon,
    iconSize: [size, size],
  });

  return (_point: Feature<Point, unknown>, latlng: L.LatLng) =>
    L.marker(latlng, {
      icon: iconDiv,
    });
};

type ClusterIcon = {
  icon: string;
  className?: string;
  size?: number;
  showCount?: boolean;
};
export const clusterIcon = ({
  icon,
  className,
  size = 30,
  showCount,
}: ClusterIcon) => {
  return (_cluster: MarkerCluster) =>
    new L.DivIcon({
      iconUrl: icon,
      html: `<div style="
      // background-color:rgba(61, 106, 134, 0.9);
      border-radius: 50%;
      padding:  5px;
      background-repeat: no-repeat;
      background-image: url(${icon});background-position: center;background-size:${size}px; width:${size}px;height:${size}px;display:flex;">
      <p style="
        display:flex;
        margin:auto;
        margin-bottom:0%;
        color: white;
        font-weight: bold;
        padding: 2px 3px;
        line-height: 1;
        border-radius: 5px;">
        ${showCount ? _cluster.getChildCount() : ''}
        </p></div>`,
      className: className,
      iconSize: L.point(size, size, true),
    });
};
