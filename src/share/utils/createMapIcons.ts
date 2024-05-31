import L from 'leaflet';
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
