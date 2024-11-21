import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Add languages to show the user in our language switcher.
export const supportedLngs = {
  en: "English",
  es: "Español",
};

i18n
  // Load translation using http -> see /public/locales
  .use(Backend)
  // Detect user language.
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next.
  // For all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en', // Only necessary if you want to override the auto-detected locale.
    fallbackLng: 'en',
    supportedLngs: Object.keys(supportedLngs),
    debug: true,
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default.
    },
  });

export default i18n;
