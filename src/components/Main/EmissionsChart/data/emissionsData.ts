import { EmissionsDataType, FuelTypesType } from './interface';
import local from 'src/locale';

const { SFO, DFO } = local.regions;

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
    name: SFO.Altai,
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
    ],
  },
  {
    name: SFO.Tyva,
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
    ],
  },
  {
    name: SFO.Krasnoyarsk,
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
    ],
  },
  {
    name: SFO.Irkutsk,
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
    ],
  },
  {
    name: SFO.Kemerovo,
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
    ],
  },
  {
    name: SFO.Tomsk,
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
    ],
  },
];

export const EmissionsDataDFO: EmissionsDataType[] = [
  {
    name: DFO.sakhRep,
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
    ],
  },
  {
    name: DFO.Kamchatka,
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
    ],
  },
  {
    name: DFO.Khabarovsk,
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
    ],
  },
  {
    name: DFO.SakhalinObl,
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
    ],
  },
  {
    name: DFO.Primorsky,
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
    ],
  },
  {
    name: DFO.Magadan,
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
    ],
  },
  {
    name: DFO.Zabaykalsky,
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
    ],
  },
  {
    name: DFO.Amur,
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
    ],
  },
  {
    name: DFO.ChukotkaAO,
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
    ],
  },
];
