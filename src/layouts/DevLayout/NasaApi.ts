import axios, { AxiosProgressEvent } from 'axios';

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

interface INasaPoligon {
  'latitude-min': number;
  'latitude-max': number;
  'longitude-min': number;
  'longitude-max': number;
}

interface INasaPoint {
  latitude: number;
  longitude: number;
}

type NasaParams<T> = INasaBaseParams & T;

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
          responseType: 'blob',
          onDownloadProgress,
        }
      );

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
}

export default NasaApi;

/*
[97.5, 51.5 ],
[110.5, 59.0 ]

*/
