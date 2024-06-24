import { Button, ButtonGroup, Stack } from '@mui/material';
import NasaApi from '../../NasaApi';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCreateRequest } from '@/share/hooks';
import { FaRegSave } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

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

const LoadNasaData = () => {
  const [powerCsv, setPowerCsv] = useState([{}]);

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
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCSV();
  }, []);

  const regionData = useCreateRequest<Blob, BlobPart>((onProgress) =>
    NasaApi.getRegionData('json', onProgress)
  );

  return (
    <Stack spacing={2} maxWidth="30%" alignItems="center">
      <Button
        download="powerPints.json"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(powerCsv)
        )}`}
        fullWidth={false}
      >
        Download
      </Button>
      <ButtonGroup
        variant="contained"
        sx={{
          width: 'fit-content',
        }}
      >
        <Button
          onClick={() => {
            const res = NasaApi.getPointData();
            console.log(res);
          }}
        >
          Load NASA data point
        </Button>
        <Button>Save</Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        sx={{
          width: 'fit-content',
        }}
      >
        <LoadingButton
          onClick={async () => {
            regionData.executeRequest();
          }}
          loading={regionData.pending}
          loadingPosition="end"
          sx={{
            '.MuiLoadingButton-loadingIndicator': {
              position: 'unset',
              ml: 1,
            },
          }}
        >
          Load NASA data region
          {regionData.pending && ' ' + regionData.progress}
        </LoadingButton>
        {regionData.complete && (
          <Button
            disabled={!regionData.data}
            fullWidth={false}
            download="powerPints.csv"
            href={window.URL.createObjectURL(
              new Blob([regionData.data!], { type: `text/csv` })
            )}
          >
            <FaRegSave size={20} />
          </Button>
        )}
      </ButtonGroup>
    </Stack>
  );
};
export default LoadNasaData;
