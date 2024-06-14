export type SettlementsChartType = {
  name: string;
  settlements: SettlementsType[];
  fuel: FuelType[];
};

export type SettlementsType = {
  label: string;
  settlements: number;
  population: number;
};

export type FuelType = {
  label: string;
  data: number;
};

