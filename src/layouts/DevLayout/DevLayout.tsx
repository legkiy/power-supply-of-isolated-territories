import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Button, Paper } from '@mui/material';
import { appBarSize, navBarSize } from '@/styles/muiTheme';

const DevLayout = () => {
  const [powerCsv, setPowerCsv] = useState([{}]);

  const getTestServer = async () => {
    try {
      const res = await fetch('http://localhost:4000/test', {
        method: 'get',
      });
      console.log(await res.json());
    } catch (err) {
      console.error(err);
    }
  };
  interface IPower {
    JAN: string;
    FEB: string;
    MAR: string;
    APR: string;
    MAY: string;
    JUN: string;
    JUL: string;
    AUG: string;
    SEP: string;
    OCT: string;
    NOV: string;
    DEC: string;
    ANN: string;
    LAT: string;
    LON: string;
    PARAMETER: string;
    YEAR: string;
  }
  const loadCSV = async () => {
    try {
      const res = await fetch('/power.csv');
      const data = await res.text();
      const csv: Papa.ParseResult<IPower> = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        // transformHeader: (header, index) => {
        //   console.log('index, header', index, header);
        //   return header;
        // },
        // step: (row) => {
        //   console.log('row', row);
        // },
      });
      const power = csv.data
        .filter((row) => row.YEAR === '2022')
        .map((row, index) => ({
          type: 'Feature',
          id: 86 + index,
          geometry: {
            type: 'Point',
            coordinates: [+row.LON, +row.LAT],
          },
          properties: {
            description: `JAN: ${row.JAN};
    FEB: ${row.FEB};
    MAR: ${row.MAR};
    APR: ${row.APR};
    MAY: ${row.MAY};
    JUN: ${row.JUN};
    JUL: ${row.JUL};
    AUG: ${row.AUG};
    SEP: ${row.SEP};
    OCT: ${row.OCT};
    NOV: ${row.NOV};
    DEC: ${row.DEC};
    ANN: ${row.ANN};
    LAT: ${row.LAT};
    LON: ${row.LON};
    PARAMETER: ${row.PARAMETER};
    YEAR: ${row.YEAR};`,
          },
        }));
      setPowerCsv(power);
      // {
      //   "type": "Feature",
      //   "id": 86,
      //   "geometry": {
      //     "type": "Point",
      //     "coordinates": [180.85758978465154, 66.39206390635134]
      //   },
      //   "properties": {
      //     "iconCaption": "Эгвекинот",
      //     "marker-color": "#ed4543"
      //   }
      // },
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTestServer();
    loadCSV();
  }, []);

  return (
    <Paper
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          mt: `${appBarSize.mobile}px`,
        },
        mt: `${appBarSize.desktop}px`,
        [breakpoints.down('lg')]: {
          mx: 2,
        },
        ml: `${navBarSize.desktop}px`,
      })}
    >
      <Button
        download="powerPints.json"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(powerCsv)
        )}`}
      >
        Download
      </Button>
    </Paper>
  );
};
export default DevLayout;
