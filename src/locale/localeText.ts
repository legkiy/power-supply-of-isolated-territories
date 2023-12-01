export const ruLocale = {
  back: 'Назад',
  FSBI: 'Федеральное государственное бюджетное учреждение науки',
  ISEM: 'Институт систем энергетики им. Л.А. Мелентьева Сибирского отделения Российской академии наук',
  title:
    'Мониторинг выбросов загрязняющих веществ и диоксида углерода в атмосферу от энергетических объектов на изолированных труднодоступных территориях в восточных регионах РФ',
  description:
    'Разработанная информационно-аналитическая система предназначена для мониторинга изменения выбросов загрязняющих веществ и диоксида углерода от энергетических объектов на изолированных от энергосистем труднодоступных территориях восточных регионов РФ при реализации различных сценариев развития. Информация представлена из созданной базы данных технико-экономических и производственных показателей электростанций и котельных, обеспечивающих энергоснабжение этой категории потребителей, и расчетных оценок выбросов в атмосферу загрязняющих веществ и диоксида углерода на основе разработанной математической модели',
  footerTitle:
    'Оценки получены при выполнении проекта госзадания по теме: FWEU-2021-0004 и НИР «Создание информационно-аналитического обеспечения модуля прогнозирования развития российской энергетики в части анализа энергетических технологий для удаленных и труднодоступных территорий вне зоны централизованного энергоснабжения» в рамках разработки важнейшего инновационного проекта государственного значения «Единая национальная система мониторинга климатически активных веществ» (соглашение о предоставлении из федерального бюджета грантов в форме субсидий в соответствии с пунктом 4 статьи 78.1 Бюджетного кодекса Российской Федерации от 01.03.2023 № 139-15-2023-003) (2023-2024 гг.). Разработчики информационно-аналитической системы: сотрудники отдела комплексных и региональных проблем энергетики ИСЭМ СО РАН',
  menu: {
    title: 'Меню',
    selectRegion: 'Выбрать регион',
    SFO: 'СФО',
    DFO: 'ДФО',
    contacts: 'Контакты',
    lang: 'Язык',
    emissions: 'Выбросы',
  },
  emissions: {
    title:
      'Выбросы при генерации тепловой  и электрической энергии на изолированных труднодоступных территориях',
    coEmissions: 'Диоксида углерода, тыс.т. CO2',
    allEmissions: 'Загрязняющие вещества, тыс.т.',
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
    'Monitoring emissions of pollutants and carbon dioxide into the atmosphere from energy facilities in isolated, hard-to-reach areas in the eastern regions of the Russian Federation',
  description:
    'The developed information and analytical system is designed to monitor changes in carbon dioxide emissions from energy facilities in hard-to-reach territories of the eastern regions of the Russian Federation isolated from energy systems during the implementation of various decarbonization scenarios. The information is presented from the created database of technical, economic and production indicators of power plants and boiler houses that provide energy supply to this category of consumers, and estimates of carbon dioxide emissions into the atmosphere based on the developed mathematical model',
  footerTitle:
    'The estimates were obtained during the implementation of the draft state assignment on the topic: FWEU-2021-0004 and research work “Creation of information and analytical support for a module for forecasting the development of the Russian energy sector in terms of the analysis of energy technologies for remote and hard-to-reach areas outside the zone of centralized energy supply” as part of the development of the most important innovative project of national importance “Unified national system for monitoring climate-active substances” (agreement on the provision of grants from the federal budget in the form of subsidies in accordance with paragraph 4 of Article 78.1 of the Budget Code of the Russian Federation dated March 1, 2023 No. 139-15-2023-003) (2023-2024 ). Developers of the information and analytical system: employees of the department of complex and regional energy problems of the ISEM SB RAS',
  menu: {
    title: 'Menu',
    selectRegion: 'Select region',
    SFO: 'SFO',
    DFO: 'DFO',
    contacts: 'Contacts',
    lang: 'Language',
    emissions: 'Emissions',
  },
  emissions: {
    title:
      'Emissions during the generation of thermal and electrical energy in isolated, hard-to-reach areas',
    coEmissions: 'Carbon dioxide, thousand tons CO2',
    allEmissions: 'Pollutants, thousand tons',
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
      ChukotkaAO: 'Chukotka AO',
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
