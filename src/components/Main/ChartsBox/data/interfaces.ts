export interface IPopulations {
  name: string;
  settlements: [
    {
      label: '200';
      settlements: number;
      population: number;
    },
    {
      label: '500';
      settlements: number;
      population: number;
    },
    {
      label: '1000';
      settlements: number;
      population: number;
    },
    {
      label: 'more1000';
      settlements: number;
      population: number;
    }
  ];
  fuel: {
    label: 'уголь' | 'дрова' | 'газ' | 'нефтепр.' | 'ГКТ' | 'дизель' | 'бензин';
    data: number;
  }[];
}
