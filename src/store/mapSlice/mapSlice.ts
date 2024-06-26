import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GeoJSONProps } from 'react-leaflet';
import regionsData from '@/assets/mapData/regions.json';
import lineData from '@/assets/mapData/line.json';
import settlementsPoints from '@/assets/mapData/points.json';
// import windPoints from '@/assets/mapData/pointsAir.json';
// import windMarker from '/windIcon.svg';
// import windsClasterIcon from '/windsClasterIcon.svg';

export interface IMapLayer {
  name: string;
  type: 'Polygon' | 'Point' | 'LineString';
  data: GeoJSONProps['data'];
  active: boolean;
  marker?: string;
  clusterMarker?: string;
  disableCluster?: boolean;
}

interface IMapSlice {
  layers: IMapLayer[];
}

const InitaState: IMapSlice = {
  layers: [
    {
      name: 'regions',
      type: 'Polygon',
      data: regionsData as GeoJSONProps['data'],
      active: true,
    },
    {
      name: 'LAP',
      type: 'LineString',
      data: lineData as GeoJSONProps['data'],
      active: true,
    },
    {
      name: 'settlementsPoints',
      type: 'Point',
      data: settlementsPoints as GeoJSONProps['data'],
      active: true,
    },
    // {
    //   name: 'windPoints',
    //   type: 'Point',
    //   data: windPoints as GeoJSONProps['data'],
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
  },
});

export const { toggleLayer } = mapSlice.actions;
export default mapSlice.reducer;
