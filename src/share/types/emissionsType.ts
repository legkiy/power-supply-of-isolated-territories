export type FuelTypesType =
  | 'уголь'
  | 'нефть'
  | 'бензин'
  | 'дизельное'
  | 'газ'
  | 'ВСЕГО'
  | 'нефтепродукты'
  | 'дрова';

export type EmissionsDataType = {
  name: string;
  fuel: {
    type: FuelTypesType;
    value: number;
  }[];
};
