import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import lEN from "../../locales/en/dictionary.json";
import lUA from "../../locales/ua/dictionary.json";
import {I18N, available as LANGUAGES_AVAILABLE } from "../constants";

i18n
  .use( LanguageDetector )
  .use( initReactI18next )
  .init({
    resources: {
      [ I18N.EN ]: { dictionary: lEN },
      [ I18N.UA ]: { dictionary: lUA },
    },
    fallbackLng: I18N.UA,
    supportedLngs: LANGUAGES_AVAILABLE,
    ns: ["dictionary"],
    defaultNS: "dictionary",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
