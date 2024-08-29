import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NasaApi } from '@/share/api';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormNumberInput, FormDateSlider } from '@/share/UI/FormComponents';
import { useActions } from '@/store';
import { GeoJsonData } from '@/store/mapSlice/mapSlice';
import { useTranslation } from 'react-i18next';

const schema = yup.object({
  title: yup.string().required('Укажите имя области'),
  years: yup.array().of(yup.number().required()).required(),
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
  const { t } = useTranslation();
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
    const { title, ...restData } = data;
    try {
      // const res = await NasaApi.getPoligonsFromBack(restData);
      const res = await NasaApi.getMaxPoligonsFromNasa(restData);

      actions.addLayer({
        type: 'Polygon',
        data: res as unknown as GeoJsonData,
        name: title,
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
                  label={t('nasa.form.title')}
                  // name="title"
                  {...register('title')}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  size="small"
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
                  name="latitude-min"
                  label={t('nasa.form.latitude-min')}
                  methods={methods}
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="latitude-max"
                  label={t('nasa.form.latitude-max')}
                  methods={methods}
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="longitude-min"
                  label={t('nasa.form.longitude-min')}
                  methods={methods}
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <FormNumberInput
                  name="longitude-max"
                  label={t('nasa.form.longitude-max')}
                  methods={methods}
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loadingStatus.loading}
              endIcon={
                loadingStatus.loading && (
                  <CircularProgress color="inherit" size={16} />
                )
              }
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
              {t('nasa.form.find')}
            </LoadingButton>
          </CardActions>
        </form>
      </FormProvider>
    </Card>
  );
};
export default LoadNasaForm;
