import { fuelType } from '../../ChartsBox/data/interfaces';

export type EmissionsDataType = {
  name: string;
  fuel: {
    type: FuelTypesType;
    value: number;
  }[];
};

export type FuelTypesType =
  | 'уголь'
  | 'нефть'
  | 'газо-конденсатное'
  | 'бензин'
  | 'дизельное'
  | 'газ'
  | 'ВСЕГО'
  | 'нефтепродукты'
  | 'дрова';
