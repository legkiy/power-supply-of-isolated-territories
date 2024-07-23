import { TextField, TextFieldProps } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';

type FormNumberInputType = TextFieldProps & {
  name: string;
  label: string;
  methods: UseFormReturn<any & FieldValues, any, undefined>; // Типизируем весь объект methods
};

const FormNumberInput: FC<FormNumberInputType> = ({ name, label, methods }) => {
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          error={!!errors[name]}
          helperText={errors[name]?.message as ReactNode}
          inputProps={{
            inputMode: 'decimal',
            pattern: '[0-9]*[.,]?[0-9]*', // Регулярное выражение для чисел с плавающей точкой
          }}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/[^0-9.,]/g, ''); // Удаление всех нечисловых символов кроме точки и запятой
          }}
        />
      )}
    />
  );
};
export default FormNumberInput;
