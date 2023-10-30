import { fuelType } from '../../ChartsBox/data/interfaces';

export type EmissionsDataType = {
  name: string;
  fuel: {
    type:
      | 'уголь'
      | 'нефть'
      | 'газо-конденсатное'
      | 'бензин'
      | 'дизельное'
      | 'газ'
      | 'ВСЕГО'
      | 'нефтепродукты';
    value: number;
  }[];
};
