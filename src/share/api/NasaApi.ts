import axiosInstanse from '@axiosInstanse';
import axios, { AxiosProgressEvent } from 'axios';
import apiRoutes from './apiRoutes';
import {
  IFeature,
  NasaParamsType,
  INasaPoligon,
  IGeometry,
  RegionPropertiesType,
} from '@/share/types';

//https://power.larc.nasa.gov/api/temporal/monthly/regional?start=2020&end=2022&latitude-min=53&latitude-max=56&longitude-min=105.26&longitude-max=108.6&community=RE&parameters=ALLSKY_SFC_SW_DWN,WS10M,WD10M&format=csv&user=DAVE
interface INasaBaseParams {
  start: number;
  end: number;
  community: 'RE';
  parameters: string; // 'ALLSKY_SFC_SW_DWN' | 'WS10M' | 'WD10M' | 'PS'[];
  format: 'csv' | 'json';
  'time-standard': 'LST';
  'wind-surface': 'vegtype_1';
  'wind-elevation': number;
}

interface INasaPoint {
  latitude: number;
  longitude: number;
}

type NasaParams<T> = Omit<INasaBaseParams & T, 'years'>;

interface Geometry {
  type: string;
  coordinates: number[];
}

interface RectangleGeometry {
  type: string;
  coordinates: number[][][];
}

interface Feature {
  type: string;
  geometry: Geometry;
  properties: {
    parameter: any;
  };
}

interface TransformedFeature {
  type: string;
  id: number;
  geometry: RectangleGeometry;
  properties: object;
}

const transformGeometry = (geometry: IGeometry): RectangleGeometry => {
  if (geometry.type === 'Point') {
    const [x, y] = geometry.coordinates as number[];
    const rectangleCoords: number[][][] = [
      [
        [x - 0.25, y - 0.25],
        [x - 0.25, y + 0.25],
        [x + 0.25, y + 0.25],
        [x + 0.25, y - 0.25],
      ],
    ];
    return { type: 'Polygon', coordinates: rectangleCoords };
  }
  throw new Error('Unsupported geometry type');
};

class NasaApi {
  static async getRegionData(
    format: 'csv' | 'json',
    onDownloadProgress: (event: AxiosProgressEvent) => void
  ) {
    try {
      const params: NasaParams<INasaPoligon> = {
        start: 2020,
        end: 2022,
        'latitude-max': 59.0,
        'latitude-min': 53.5,
        'longitude-min': 105.0,
        'longitude-max': 110.5,
        community: 'RE',
        parameters: 'ALLSKY_SFC_SW_DWN,WS10M,WD10M,PS',
        format: format,
        'time-standard': 'LST',
        'wind-surface': 'vegtype_1',
        'wind-elevation': 10.0,
      };

      const res = await axios.get(
        `https://power.larc.nasa.gov/api/temporal/monthly/regional`,
        {
          params,
          responseType: format === 'csv' ? 'blob' : 'json',
          onDownloadProgress,
        }
      );

      if (format === 'json') {
        const outputJson = (res.data.features as []).map(
          (feature: Feature, index) => {
            const newFeature: TransformedFeature = {
              ...feature,
              properties: {
                fill: '#ffff37',
                'fill-opacity': 0.1,
                stroke: '#ffff37',
                'stroke-width': '1',
                'stroke-opacity': 0.5,
                ...feature.properties,
              },
              id: index,
              geometry: transformGeometry(feature.geometry),
            };
            return newFeature;
          }
        );

        return outputJson;
      }
      return res.data;

      // if (download) {
      //   const url = window.URL.createObjectURL(
      //     new Blob([res.data], { type: 'text/csv' })
      //   );
      //   const link = document.createElement('a');
      //   link.href = url;
      //   link.setAttribute('download', `nasa_data.${format}`);
      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link);
      // }
      // console.log(res.data);
    } catch (error) {
      console.error('NASA load error', error);
    }
  }

  static async getPointData() {
    try {
      const params: NasaParams<INasaPoint> = {
        start: 20240621,
        end: 20240622,
        latitude: 52.3918,
        longitude: 102.9129,
        community: 'RE',
        parameters: 'ALLSKY_SFC_SW_DWN,WS10M,WD10M,PS',
        format: 'json',
        'time-standard': 'LST',
        'wind-surface': 'vegtype_1',
        'wind-elevation': 10.0,
      };

      const res = await axios.get(
        `https://power.larc.nasa.gov/api/temporal/daily/point`,
        {
          params,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error('NASA load error', error);
    }
  }

  /**
   *
   * @param polygonParams
   * @returns
   */
  static async getPoligonsFromBack(polygonParams: INasaPoligon) {
    const res = await axiosInstanse.post(
      apiRoutes.app.nasa.region,
      polygonParams
    );
    return res.data;
  }

  static async getMaxPoligonsFromNasa(regionParams: INasaPoligon) {
    const { years, ...restParams } = regionParams;

    const calculateAvgInObj = (targetObj: object) => {
      const parmetrArray = Object.entries(targetObj).map(
        ([, value]) => value
      ) as number[];

      return parmetrArray.reduce((a, b) => a + b) / parmetrArray.length;
    };
    try {
      const params: NasaParamsType<INasaPoligon> = {
        start: years[0],
        end: years[1],
        community: 'RE',
        parameters: 'ALLSKY_SFC_SW_DWN,WS10M', // ALLSKY_SFC_SW_DWN - солнечная радиация, WS10M - скорость на 10 метрах, WD10M - направление на 10 метрах, PS - Поверхностное давление
        format: 'json',
        'time-standard': 'LST',
        'wind-surface': 'vegtype_1',
        'wind-elevation': 10.0,
        ...restParams,
      };

      const res = await axios.get(
        `https://power.larc.nasa.gov/api/temporal/monthly/regional`,
        {
          params,
          responseType: 'json',
        }
      );

      const outputJson = (res.data.features as []).map(
        (feature: IFeature<RegionPropertiesType>, index) => {
          const windSpeed = calculateAvgInObj(
            feature.properties.parameter['WS10M']
          );
          const solarRadiation = calculateAvgInObj(
            feature.properties.parameter['ALLSKY_SFC_SW_DWN']
          );
          const newFeature: IFeature<RegionPropertiesType> = {
            ...feature,
            properties: {
              ...feature.properties,
              fill: '#ffff37',
              'fill-opacity': 0.1,
              stroke: '#ffff37',
              'stroke-width': '1',
              'stroke-opacity': 0.5,
              description: `
              <div>
              Wind Speed AVG: ${windSpeed} m/s <br/>
              Solar Radiation AVG: ${solarRadiation} kWh/m^2/day
              </div>`,
              display: {
                details: true,
                windSpeed,
                solarRadiation,
              },
            },
            id: index,
            geometry: transformGeometry(feature.geometry),
          };
          return newFeature;
        }
      );

      // Найти максимальные значения
      const maxWindSpeed = Math.max(
        ...outputJson.map((f) => f.properties.display.windSpeed)
      );

      const maxSolarRadiation = Math.max(
        ...outputJson.map((f) => f.properties.display.solarRadiation)
      );

      // Найти объекты с максимальными значениями
      const result = outputJson.filter(
        (f) =>
          f.properties.display.windSpeed === maxWindSpeed ||
          f.properties.display.solarRadiation === maxSolarRadiation
      );

      // Убедиться, что объекты уникальны
      const uniqueResult = Array.from(new Set(result.map((f) => f.id))).map(
        (id) => result.find((f) => f.id === id)
      );

      uniqueResult.forEach((f) => {
        if (f!.properties.display.solarRadiation === maxSolarRadiation) {
          f!.properties.fill = '#e2db62';
          f!.properties.stroke = '#e2db62';
        }
        if (f!.properties.display.windSpeed === maxWindSpeed) {
          f!.properties.fill = '#62b1e2';
          f!.properties.stroke = '#62b1e2';
          f!.properties['fill-opacity'] = 0.4;
        }
      });

      return uniqueResult;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export default NasaApi;
