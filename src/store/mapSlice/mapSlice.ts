import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GeoJSONProps } from 'react-leaflet';
import regionsData from '@/assets/mapData/regions.json';
import lineData from '@/assets/mapData/line.json';
import settlementsPoints from '@/assets/mapData/points.json';
// import powerPoints from '@/assets/neuralData/powerPints.json';
// import irkSettelments from '@/assets/neuralData/irkSettelments.json';
// import solarPoligons from '@/assets/neuralData/solarPoligons.json';

// import windPoints from '@/assets/mapData/pointsAir.json';
// import windMarker from '/windIcon.svg';
// import windsClasterIcon from '/windsClasterIcon.svg';

export type GeoJsonData = GeoJSONProps['data'] & { features: unknown };

export interface IMapLayer {
  name: string;
  type: 'Polygon' | 'Point' | 'LineString';
  data: GeoJsonData;
  active: boolean;
  marker?: string;
  clusterMarker?: string;
  disableCluster?: boolean;
}

interface IMapSlice {
  layers: IMapLayer[];
  coords: {
    lat: number;
    lng: number;
  };
}

const InitaState: IMapSlice = {
  coords: {
    lat: 66.23,
    lng: 110.98,
  },
  layers: [
    {
      name: 'regions',
      type: 'Polygon',
      data: regionsData as GeoJsonData,
      active: true,
    },
    {
      name: 'LAP',
      type: 'LineString',
      data: lineData as GeoJsonData,
      active: true,
    },
    {
      name: 'settlementsPoints',
      type: 'Point',
      data: settlementsPoints as GeoJsonData,
      active: true,
    },
    // {
    //   name: 'powerPoints',
    //   type: 'Point',
    //   data: powerPoints as unknown as GeoJsonData,
    //   active: true,
    //   disableCluster: true,
    // },
    // {
    //   name: 'irkSettelments',
    //   type: 'Point',
    //   data: irkSettelments as GeoJsonData,
    //   active: true,
    //   disableCluster: true,
    // },
    // {
    //   name: 'solarPoligons',
    //   type: 'Polygon',
    //   data: solarPoligons as GeoJsonData,
    //   active: true,
    // },
    // {
    //   name: 'windPoints',
    //   type: 'Point',
    //   data: windPoints as GeoJsonData,
    //   active: true,
    //   marker: windMarker,
    //   clusterMarker: windsClasterIcon,
    // },
  ],
};

export const mapSlice = createSlice({
  name: 'map',
  initialState: InitaState,
  reducers: {
    toggleLayer: (state, action: PayloadAction<string>) => {
      const layer = state.layers.find((layer) => layer.name === action.payload);
      if (layer) {
        layer.active = !layer.active;
      }
    },
    addLayer: (state, action: PayloadAction<IMapLayer>) => {
      const newLayer = action.payload;
      let insertIndex = state.layers.length;

      if (newLayer.type === 'Polygon') {
        insertIndex = state.layers.findIndex(
          (layer) => layer.type !== 'Polygon'
        );
        if (insertIndex === -1) insertIndex = state.layers.length;
      } else if (newLayer.type === 'LineString') {
        insertIndex = state.layers.findIndex((layer) => layer.type === 'Point');
        if (insertIndex === -1) insertIndex = state.layers.length;
      }

      state.layers.splice(insertIndex, 0, newLayer);
    },
    setCoords: (state, action: PayloadAction<{ lat: number; lng: number }>) => {
      state.coords = action.payload;
    },
  },
});

export const { toggleLayer } = mapSlice.actions;
export default mapSlice.reducer;
