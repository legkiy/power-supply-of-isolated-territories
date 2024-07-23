import { Card, CardActions, CardContent, Grid, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import NasaApi from '../../NasaApi';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormNumberInput, FormDateSlider } from '@/share/UI/FormComponents';
import { useActions } from '@/store';
import { GeoJsonData } from '@/store/mapSlice/mapSlice';

const schema = yup.object({
  title: yup.string().required('Укажите имя области'),
  years: yup.array().of(yup.number()),
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
});

const LoadNasaForm: FC = () => {
  const [loadingStatus, setLoadingSattus] = useState({
    loading: false,
    error: false,
    complite: false,
  });

  const actions = useActions();

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      years: [2020, new Date().getFullYear() - 2],
    },
  });

  const {
    register,
    formState: { errors },
  } = methods;

  const onSubmit = methods.handleSubmit(async (data) => {
    setLoadingSattus({
      loading: true,
      complite: false,
      error: false,
    });
    const { years, ...restData } = data;
    try {
      const res = await NasaApi.getRegionPoints(restData, years as number[]);
      actions.addLayer({
        type: 'Polygon',
        data: res as GeoJsonData,
        name: 'test',
        active: true,
      });
      setLoadingSattus({
        loading: false,
        complite: true,
        error: false,
      });
    } catch (error) {
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
                <TextField
                  fullWidth
                  label="title"
                  // name="title"
                  {...register('title')}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormDateSlider
                  value={[2020, 2023]}
                  methods={methods}
                  name="years"
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="latitude-max"
                  label="latitude-max"
                  methods={methods}
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="longitude-max"
                  label="longitude-max"
                  methods={methods}
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="latitude-min"
                  label="latitude-min"
                  methods={methods}
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="longitude-min"
                  label="longitude-min"
                  methods={methods}
                />
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
