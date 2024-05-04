import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import RU_LOCALE from './locales/ru.json';
import EN_LOCALE from './locales/en.json';

export const LOCALES = ['ru', 'en'];

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    supportedLngs: LOCALES,
    resources: {
      en: {
        translation: EN_LOCALE,
      },
      ru: {
        translation: RU_LOCALE,
      },
    },
  });
