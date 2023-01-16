import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEN from './locales/en/translation.json';
import tHI from './locales/hi/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: tEN
      },
      hi: {
        translation: tHI
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  
  export const changeLang = (l) => {
    return() => {
      i18n.changeLanguage(l)
      localStorage.setItem('lang', l)
    }
  }

