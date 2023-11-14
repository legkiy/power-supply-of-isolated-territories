import { EmissionsDataType, FuelTypesType } from './interface';

export const chartColors: { [key in FuelTypesType]: string } = {
  уголь: '#5c5c5c',
  нефть: '#79541e',
  'газо-конденсатное': '#3e791e',
  газ: '#1e98ff',
  нефтепродукты: '#c74c00',
  бензин: '#4d791e',
  дизельное: '#86860d',
  ВСЕГО: '#691eff',
};

export const EmissionsDataSFO: EmissionsDataType[] = [
  {
    name: 'Республика Алтай',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 1.7,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 1.7,
      },
    ],
  },
  {
    name: 'Республика Тыва',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 12.8,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 12.8,
      },
    ],
  },
  {
    name: 'Красноярский край',
    fuel: [
      {
        type: 'уголь',
        value: 368.8,
      },
      {
        type: 'нефть',
        value: 186.0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 100.0,
      },
      {
        type: 'газ',
        value: 59.9,
      },
      {
        type: 'ВСЕГО',
        value: 714.8,
      },
    ],
  },
  {
    name: 'Иркутская область',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 3.2,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 26.8,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 30.1,
      },
    ],
  },
  {
    name: 'Кемеровская область',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 3.2,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 0.9,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 0.9,
      },
    ],
  },
  {
    name: 'Томская область',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 12.9,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 12.9,
      },
    ],
  },
];

export const EmissionsDataDFO: EmissionsDataType[] = [
  {
    name: 'Республика Саха (Якутия)',
    fuel: [
      {
        type: 'уголь',
        value: 511.6,
      },
      {
        type: 'нефть',
        value: 161.2,
      },
      {
        type: 'газо-конденсатное',
        value: 39.3,
      },
      {
        type: 'нефтепродукты',
        value: 227.7,
      },
      {
        type: 'газ',
        value: 4.2,
      },
      {
        type: 'ВСЕГО',
        value: 944.0,
      },
    ],
  },
  {
    name: 'Камчатский край',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 78.0,
      },
      {
        type: 'газ',
        value: 3.6,
      },
      {
        type: 'ВСЕГО',
        value: 81.6,
      },
    ],
  },
  {
    name: 'Хабаровский край',
    fuel: [
      {
        type: 'уголь',
        value: 215.8,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 179.3,
      },
      {
        type: 'газ',
        value: 14.5,
      },
      {
        type: 'ВСЕГО',
        value: 409.6,
      },
    ],
  },
  {
    name: 'Сахалинская область',
    fuel: [
      {
        type: 'уголь',
        value: 34.9,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 100.6,
      },
      {
        type: 'газ',
        value: 1.4,
      },
      {
        type: 'ВСЕГО',
        value: 136.9,
      },
    ],
  },
  {
    name: 'Приморский край',
    fuel: [
      {
        type: 'уголь',
        value: 0.2,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 17.0,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 17.2,
      },
    ],
  },
  {
    name: 'Магаданская область',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 11.5,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 11.5,
      },
    ],
  },
  {
    name: 'Забайкальский край',
    fuel: [
      {
        type: 'уголь',
        value: 4.1,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 3.8,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 8.0,
      },
    ],
  },
  {
    name: 'Амурская область',
    fuel: [
      {
        type: 'уголь',
        value: 0,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 2.2,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 2.2,
      },
    ],
  },
  {
    name: 'Чукотский АО',
    fuel: [
      {
        type: 'уголь',
        value: 201.6,
      },
      {
        type: 'нефть',
        value: 0,
      },
      {
        type: 'газо-конденсатное',
        value: 0,
      },
      {
        type: 'нефтепродукты',
        value: 73.6,
      },
      {
        type: 'газ',
        value: 0,
      },
      {
        type: 'ВСЕГО',
        value: 275.2,
      },
    ],
  },
];
