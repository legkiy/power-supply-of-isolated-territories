import { IPopulations } from './interfaces';
import { getLocal } from '../../../../utils';
import local from '../../../../locale';

const { DFO, SFO } = local.regions;

export const templateData: IPopulations = {
  name: local.regions.legend,
  settlements: [
    {
      label: '200',
      settlements: 13,
      population: 3000,
    },
    {
      label: '500',
      settlements: 14,
      population: 4000,
    },
    {
      label: '1000',
      settlements: 14,
      population: 5000,
    },
    {
      label: 'more1000',
      settlements: 16,
      population: 6000,
    },
  ],
  fuel: [
    {
      label: 'уголь',
      data: 100,
    },
    {
      label: 'дрова',
      data: 90,
    },
    {
      label: 'газ',
      data: 80,
    },
    {
      label: 'нефть',
      data: 70,
    },
    {
      label: 'нефтепр.',
      data: 60,
    },
  ],
};

export const DFOData: IPopulations[] = [
  {
    name: DFO.sakhRepArctic,
    settlements: [
      {
        label: '200',
        settlements: 17,
        population: 1796,
      },
      {
        label: '500',
        settlements: 35,
        population: 12210,
      },
      {
        label: '1000',
        settlements: 15,
        population: 9827,
      },
      {
        label: 'more1000',
        settlements: 17,
        population: 40653,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 124.1,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 90.6,
      },
      {
        label: 'нефтепр.',
        data: 85.6,
      },
    ],
  },
  {
    name: DFO.sakhRepSouth,
    settlements: [
      {
        label: '200',
        settlements: 20,
        population: 2368,
      },
      {
        label: '500',
        settlements: 23,
        population: 7957,
      },
      {
        label: '1000',
        settlements: 11,
        population: 7701,
      },
      {
        label: 'more1000',
        settlements: 5,
        population: 9237,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 60.6,
      },
      {
        label: 'дрова',
        data: 0.1,
      },
      {
        label: 'газ',
        data: 2.6,
      },
      {
        label: 'нефть',
        data: 4.3,
      },
      {
        label: 'нефтепр.',
        data: 19.3,
      },
    ],
  },
  {
    name: DFO.Zabaykalsky,
    settlements: [
      {
        label: '200',
        settlements: 16,
        population: 1088,
      },
      {
        label: '500',
        settlements: 5,
        population: 1383,
      },
      {
        label: '1000',
        settlements: 2,
        population: 1765,
      },
      {
        label: 'more1000',
        settlements: 0,
        population: 0,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 1.4,
      },
      {
        label: 'дрова',
        data: 0.8,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 1.8,
      },
    ],
  },
  {
    name: DFO.Kamchatka,
    settlements: [
      {
        label: '200',
        settlements: 12,
        population: 952,
      },
      {
        label: '500',
        settlements: 13,
        population: 4298,
      },
      {
        label: '1000',
        settlements: 9,
        population: 6104,
      },
      {
        label: 'more1000',
        settlements: 9,
        population: 20744,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 2.3,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 25.9,
      },
    ],
  },
  {
    name: DFO.Primorsky,
    settlements: [
      {
        label: '200',
        settlements: 16,
        population: 1823,
      },
      {
        label: '500',
        settlements: 3,
        population: 1223,
      },
      {
        label: '1000',
        settlements: 2,
        population: 1610,
      },
      {
        label: 'more1000',
        settlements: 1,
        population: 2933,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0.1,
      },
      {
        label: 'дрова',
        data: 1.1,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 7.8,
      },
    ],
  },
  {
    name: DFO.Khabarovsk,
    settlements: [
      {
        label: '200',
        settlements: 48,
        population: 3630,
      },
      {
        label: '500',
        settlements: 31,
        population: 10091,
      },
      {
        label: '1000',
        settlements: 15,
        population: 10302,
      },
      {
        label: 'more1000',
        settlements: 10,
        population: 19517,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 80.2,
      },
      {
        label: 'дрова',
        data: 8.8,
      },
      {
        label: 'газ',
        data: 7.8,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 82.6,
      },
    ],
  },
  {
    name: DFO.Magadan,
    settlements: [
      {
        label: '200',
        settlements: 7,
        population: 494,
      },
      {
        label: '500',
        settlements: 2,
        population: 565,
      },
      {
        label: '1000',
        settlements: 0,
        population: 0,
      },
      {
        label: 'more1000',
        settlements: 1,
        population: 1300,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 5.3,
      },
    ],
  },
  {
    name: DFO.Chukotka,
    settlements: [
      {
        label: '200',
        settlements: 9,
        population: 1158,
      },
      {
        label: '500',
        settlements: 15,
        population: 4822,
      },
      {
        label: '1000',
        settlements: 7,
        population: 4559,
      },
      {
        label: 'more1000',
        settlements: 4,
        population: 6090,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 68.1,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 33.9,
      },
    ],
  },
  {
    name: DFO.SakhalinKuril,
    settlements: [
      {
        label: '200',
        settlements: 5,
        population: 308,
      },
      {
        label: '500',
        settlements: 2,
        population: 906,
      },
      {
        label: '1000',
        settlements: 2,
        population: 1576,
      },
      {
        label: 'more1000',
        settlements: 1,
        population: 17747,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 10.3,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 2.2,
      },
    ],
  },
  {
    name: DFO.Sakhalin,
    settlements: [
      {
        label: '200',
        settlements: 6,
        population: 409,
      },
      {
        label: '500',
        settlements: 1,
        population: 429,
      },
      {
        label: '1000',
        settlements: 2,
        population: 1126,
      },
      {
        label: 'more1000',
        settlements: 0,
        population: 0,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 1.5,
      },
      {
        label: 'дрова',
        data: 0.1,
      },
      {
        label: 'газ',
        data: 0.9,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 3.24,
      },
    ],
  },
  // {
  //   name: 'Сахалинская область',
  //   settlements: [
  //     {
  //       label: '200',
  //       settlements: 11,
  //       population: 717,
  //     },
  //     {
  //       label: '500',
  //       settlements: 3,
  //       population: 1335,
  //     },
  //     {
  //       label: '1000',
  //       settlements: 4,
  //       population: 2702,
  //     },
  //     {
  //       label: 'more1000',
  //       settlements: 1,
  //       population: 17747,
  //     },
  //   ],
  //   fuel: [
  //     {
  //       label: 'уголь',
  //       data: 11.8,
  //     },
  //     {
  //       label: 'дрова',
  //       data: 0.1,
  //     },
  //     {
  //       label: 'газ',
  //       data: 0.9,
  //     },
  //     {
  //       label: 'нефть',
  //       data: 0,
  //     },
  //     {
  //       label: 'нефтепр.',
  //       data: 46.3,
  //     },
  //   ],
  // },
  {
    name: DFO.Amur,
    settlements: [
      {
        label: '200',
        settlements: 4,
        population: 256,
      },
      {
        label: '500',
        settlements: 1,
        population: 316,
      },
      {
        label: '1000',
        settlements: 0,
        population: 0,
      },
      {
        label: 'more1000',
        settlements: 0,
        population: 0,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 10.3,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 44.1,
      },
    ],
  },
];

export const SFOData: IPopulations[] = [
  {
    name: SFO.Altai,
    settlements: [
      {
        label: '200',
        settlements: 4,
        population: 253,
      },
      {
        label: '500',
        settlements: 3,
        population: 643,
      },
      {
        label: '1000',
        settlements: 2,
        population: 1302,
      },
      {
        label: 'more1000',
        settlements: 1,
        population: 1363,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 0.8,
      },
    ],
  },
  {
    name: SFO.Tyva,
    settlements: [
      {
        label: '200',
        settlements: 7,
        population: 662,
      },
      {
        label: '500',
        settlements: 3,
        population: 759,
      },
      {
        label: '1000',
        settlements: 0,
        population: 0,
      },
      {
        label: 'more1000',
        settlements: 4,
        population: 10866,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 5.9,
      },
    ],
  },
  {
    name: SFO.KrasnoyarskArctic,
    settlements: [
      {
        label: '200',
        settlements: 23,
        population: 2023,
      },
      {
        label: '500',
        settlements: 14,
        population: 4194,
      },
      {
        label: '1000',
        settlements: 4,
        population: 2296,
      },
      {
        label: 'more1000',
        settlements: 4,
        population: 9640,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 121.6,
      },
      {
        label: 'дрова',
        data: 1.2,
      },
      {
        label: 'газ',
        data: 37.7,
      },
      {
        label: 'нефть',
        data: 21.1,
      },
      {
        label: 'нефтепр.',
        data: 26.7,
      },
    ],
  },
  {
    name: SFO.KrasnoyarskSouth,
    settlements: [
      {
        label: '200',
        settlements: 33,
        population: 2855,
      },
      {
        label: '500',
        settlements: 13,
        population: 3982,
      },
      {
        label: '1000',
        settlements: 3,
        population: 1833,
      },
      {
        label: 'more1000',
        settlements: 4,
        population: 11043,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 10.8,
      },
      {
        label: 'дрова',
        data: 1.0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 65.4,
      },
      {
        label: 'нефтепр.',
        data: 19.4,
      },
    ],
  },
  {
    name: SFO.Irkutsk,
    settlements: [
      {
        label: '200',
        settlements: 47,
        population: 2421,
      },
      {
        label: '500',
        settlements: 11,
        population: 3629,
      },
      {
        label: '1000',
        settlements: 3,
        population: 1655,
      },
      {
        label: 'more1000',
        settlements: 1,
        population: 1856,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 1.5,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 1.5,
      },
      {
        label: 'нефтепр.',
        data: 12.4,
      },
    ],
  },
  {
    name: SFO.Kemerovo,
    settlements: [
      {
        label: '200',
        settlements: 41,
        population: 913,
      },
      {
        label: '500',
        settlements: 1,
        population: 274,
      },
      {
        label: '1000',
        settlements: 0,
        population: 0,
      },
      {
        label: 'more1000',
        settlements: 0,
        population: 0,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 0.7,
      },
    ],
  },
  {
    name: SFO.Tomsk,
    settlements: [
      {
        label: '200',
        settlements: 14,
        population: 1252,
      },
      {
        label: '500',
        settlements: 9,
        population: 2468,
      },
      {
        label: '1000',
        settlements: 2,
        population: 1385,
      },
      {
        label: 'more1000',
        settlements: 3,
        population: 4583,
      },
    ],
    fuel: [
      {
        label: 'уголь',
        data: 0,
      },
      {
        label: 'дрова',
        data: 0,
      },
      {
        label: 'газ',
        data: 0,
      },
      {
        label: 'нефть',
        data: 0,
      },
      {
        label: 'нефтепр.',
        data: 5.9,
      },
    ],
  },
];
