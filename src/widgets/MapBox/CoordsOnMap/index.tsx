import { useActions, useAppSelector } from '@/store';
import { Card, Typography } from '@mui/material';
import { useMapEvents } from 'react-leaflet';
import { FeatureGroup } from 'react-leaflet';

const CoordsOnMap = () => {
  const actions = useActions();
  const coords = useAppSelector((state) => state.map.coords);

  useMapEvents({
    click: (e) => {
      actions.setCoords({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
    mousemove: (e) => {
      actions.setCoords({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return (
    <FeatureGroup>
      <Card
        sx={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 1000,
          p: 0.5,
          pointerEvents: 'none',
        }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Typography variant="body2" fontSize={10}>
          lat: {coords.lat}
        </Typography>
        <Typography variant="body2" fontSize={10}>
          lng: {coords.lng}
        </Typography>
      </Card>
    </FeatureGroup>
  );
};
export default CoordsOnMap;
