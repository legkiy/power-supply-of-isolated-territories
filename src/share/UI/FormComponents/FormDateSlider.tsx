import { Box, Slider } from '@mui/material';
import { FC } from 'react';
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';

interface DateSliderProps {
  name: string;
  value: number[];
  methods: UseFormReturn<any & FieldValues, any, undefined>; // Типизируем весь объект methods
}
const FormDateSlider: FC<DateSliderProps> = ({ name, methods }) => {
  const currentYear = new Date().getFullYear() - 2;

  const { control } = methods;

  return (
    <Box
      sx={{
        pt: 1,
        px: 1,
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Slider
              value={field.value}
              max={currentYear}
              min={2000}
              onChange={field.onChange}
              valueLabelDisplay="on"
            />
          );
        }}
      />
    </Box>
  );
};
export default FormDateSlider;
