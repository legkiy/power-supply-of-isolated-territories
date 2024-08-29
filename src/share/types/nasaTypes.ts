export interface INasaPoligon {
  'latitude-min': number;
  'latitude-max': number;
  'longitude-min': number;
  'longitude-max': number;
  years: number[];
}

export interface IGeometry {
  type: string;
  coordinates: number[][][] | number[];
}

export interface IFeature {
  id: number;
  type: string;
  geometry: IGeometry;
  properties: any;
}

/**
 * @param parameters
 *-
 * - ALLSKY_SFC_SW_DWN - солнечная радиация
 * - WS10M - скорость на 10 метрах
 * - WD10M - направление на 10 метрах
 * - PS - Поверхностное давление
 */
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

export type NasaParamsType<T> = Omit<INasaBaseParams & T, 'years'>;
