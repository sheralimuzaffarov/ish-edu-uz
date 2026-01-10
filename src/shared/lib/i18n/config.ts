import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslations from './locales/uz.json';
import ruTranslations from './locales/ru.json';
import enTranslations from './locales/en.json';
import krTranslations from './locales/kr.json';

const resources = {
  uz: { translation: uzTranslations },
  ru: { translation: ruTranslations },
  en: { translation: enTranslations },
  kr: { translation: krTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
