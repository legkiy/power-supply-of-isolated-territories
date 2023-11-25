export const ruLocale = {
  back: 'Назад',
  FSBI: 'Федеральное государственное бюджетное учреждение науки',
  ISEM: 'Институт систем энергетики им. Л.А. Мелентьева Сибирского отделения Российской академии наук',
  title:
    'Мониторинг выбросов диоксида углерода от энергетических объектов на изолированных труднодоступных территориях в восточных регионах РФ',
  description:
    'Разработанная информационно-аналитическая система предназначена для мониторинга изменения выбросов диоксида углерода от энергетических объектов на изолированных от энергосистем труднодоступных территориях восточных регионов РФ при реализации различных сценариев декарбонизации. Информация представлена из созданной базы данных технико-экономических и производственных показателей электростанций и котельных, обеспечивающих энергоснабжение этой категории потребителей, и расчетных оценок выбросов в атмосферу диоксида углерода на основе разработанной математической модели',
  menu: {
    title: 'Меню',
    selectRegion: 'Выбрать регион',
    SFO: 'СФО',
    DFO: 'ДФО',
    contacts: 'Контакты',
    lang: 'Язык',
    emissions: 'Выбросы',
  },
  regions: {
    legend: 'Условные обозначения',
    DFO: {
      title: 'DFO',
      sakhRep: 'Республика Саха (Якутия)',
      sakhRepArctic: 'Республика Саха (Якутия), арктика',
      sakhRepSouth: 'Республика Саха (Якутия), юг',
      Zabaykalsky: 'Забайкальский край',
      Kamchatka: 'Камчатский край',
      Primorsky: 'Приморский край',
      Khabarovsk: 'Хабаровский край',
      Magadan: 'Магаданская',
      ChukotkaAO: 'Чукотский АО',
      Chukotka: 'Чукотский автономный округ',
      SakhalinObl: 'Сахалинская область',
      SakhalinKuril: 'Сахалинская область, Курильские о-ва',
      Sakhalin: 'Сахалинская область, о. Сахалин',
      Amur: 'Амурская область',
    },
    SFO: {
      Altai: 'Республика Алтай',
      Tyva: 'Республика Тыва',
      Krasnoyarsk: 'Красноярский край',
      KrasnoyarskArctic: 'Красноярский край, арктика',
      KrasnoyarskSouth: 'Красноярский край, юг',
      Irkutsk: 'Иркутская область',
      Kemerovo: 'Кемеровская область',
      Tomsk: 'Томская область',
    },
  },
};

export type LocaleType = typeof ruLocale;

export const enLocale: LocaleType = {
  back: 'Back',
  FSBI: 'Federal State Budgetary Institution of Science',
  ISEM: 'Institute of Energy Systems named after. L.A. Melentyev of the Siberian Branch of the Russian Academy of Sciences',
  title:
    'Monitoring carbon dioxide emissions from energy facilities in isolated, hard-to-reach areas in the eastern regions of the Russian Federation',
  description:
    'The developed information and analytical system is designed to monitor changes in carbon dioxide emissions from energy facilities in hard-to-reach territories of the eastern regions of the Russian Federation isolated from energy systems during the implementation of various decarbonization scenarios. The information is presented from the created database of technical, economic and production indicators of power plants and boiler houses that provide energy supply to this category of consumers, and estimates of carbon dioxide emissions into the atmosphere based on the developed mathematical model',
  menu: {
    title: 'Menu',
    selectRegion: 'Select region',
    SFO: 'SFO',
    DFO: 'DFO',
    contacts: 'Contacts',
    lang: 'Language',
    emissions: 'Emissions',
  },
  regions: {
    legend: 'Legend',
    DFO: {
      title: 'DFO',
      sakhRep: 'Republic of Sakha (Yakutia)',
      sakhRepArctic: 'Republic of Sakha (Yakutia), arctic',
      sakhRepSouth: 'Republic of Sakha (Yakutia), south',
      Zabaykalsky: 'Zabaykalsky Krai',
      Kamchatka: 'Kamchatka Krai',
      Primorsky: 'Primorsky Krai',
      Khabarovsk: 'Khabarovsk Krai',
      Magadan: 'Magadan region',
      ChukotkaAO: 'Чукотский AO',
      Chukotka: 'Chukotka autonomous okrug',
      SakhalinObl: 'Sakhalin region',
      SakhalinKuril: 'Sakhalin region, Kuril Islands',
      Sakhalin: 'Sakhalin region, Sakhalin Islands',
      Amur: 'Amur region',
    },
    SFO: {
      Altai: 'Altai Republic',
      Tyva: 'Tyva Republic',
      Krasnoyarsk: 'Krasnoyarsk Krai',
      KrasnoyarskArctic: 'Krasnoyarsk Krai, arctic',
      KrasnoyarskSouth: 'Krasnoyarsk Krai, south',
      Irkutsk: 'Irkutsk Region',
      Kemerovo: 'Kemerovo Region',
      Tomsk: 'Tomsk Region',
    },
  },
};
