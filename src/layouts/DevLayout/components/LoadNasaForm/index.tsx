import { Card, CardActions, CardContent, Grid } from '@mui/material';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import NasaApi from '../../NasaApi';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormNumberInput } from '@/share/UI/FormComponents';

const schema = yup.object({
  'latitude-min': yup.number().positive().required(),
  'longitude-min': yup.number().positive().required(),
  'latitude-max': yup
    .number()
    .positive()
    .required()
    .test(
      'latitude-max',
      'latitude-max должно быть больше чем latitude-min и разница между ними не должна превышать 10',
      function (value) {
        const { 'latitude-min': latMin } = this.parent;
        return value > latMin && value - latMin <= 10;
      }
    ),
  'longitude-max': yup
    .number()
    .positive()
    .required()
    .test(
      'longitude-max',
      'longitude-max должно быть больше чем longitude-min и разница между ними не должна превышать 10',
      function (value) {
        const { 'longitude-min': longMin } = this.parent;
        return value > longMin && value - longMin <= 10;
      }
    ),
  numberTest: yup.number(),
});

const LoadNasaForm: FC = () => {
  const [loadingStatus, setLoadingSattus] = useState({
    loading: false,
    error: false,
    complite: false,
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    setLoadingSattus({
      loading: true,
      complite: false,
      error: false,
    });
    try {
      const res = await NasaApi.getRegionPoints(data, 'json');
      console.log(res);
      setLoadingSattus({
        loading: false,
        complite: true,
        error: false,
      });
    } catch (error) {
      console.error(error);

      setLoadingSattus({
        loading: false,
        complite: false,
        error: true,
      });
    }
  });

  return (
    <Card>
      <FormProvider {...methods}>
        <form noValidate onSubmit={onSubmit}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormNumberInput
                  name="latitude-min"
                  label="latitude-min"
                  methods={methods}
                />
                {/* <TextField
                  fullWidth
                  label="latitude-min"
                  {...register('latitude-min')}
                  error={!!errors['latitude-min']}
                  helperText={errors['latitude-min']?.message}
                /> */}
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="longitude-min"
                  label="longitude-min"
                  methods={methods}
                />
                {/* <TextField
                  fullWidth
                  label="longitude-min"
                  {...register('longitude-min')}
                  error={!!errors['longitude-min']}
                  helperText={errors['longitude-min']?.message}
                /> */}
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="latitude-max"
                  label="latitude-max"
                  methods={methods}
                />
                {/* <TextField
                  fullWidth
                  label="latitude-max"
                  {...register('latitude-max')}
                  error={!!errors['latitude-max']}
                  helperText={errors['latitude-max']?.message}
                /> */}
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="longitude-max"
                  label="longitude-max"
                  methods={methods}
                />
                {/* <TextField
                  fullWidth
                  label="longitude-max"
                  {...register('longitude-max')}
                  error={!!errors['longitude-max']}
                  helperText={errors['longitude-max']?.message}
                /> */}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loadingStatus.loading}
              loadingPosition="end"
              color="success"
              fullWidth
              sx={{
                '.MuiLoadingButton-loadingIndicator': {
                  position: 'unset',
                  ml: 1,
                },
                maxWidth: 200,
                mx: 'auto',
              }}
            >
              Submit
            </LoadingButton>
          </CardActions>
        </form>
      </FormProvider>
    </Card>
  );
};
export default LoadNasaForm;
