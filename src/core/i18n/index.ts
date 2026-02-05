import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import lEN from "../../locales/en/common.json";
import lUA from "../../locales/ua/common.json";
import {I18N, available as LANGUAGES_AVAILABLE } from "../constants";

i18n
  .use( LanguageDetector )
  .use( initReactI18next )
  .init({
    resources: {
      [ I18N.EN ]: { common: lEN },
      [ I18N.UA ]: { common: lUA },
    },
    fallbackLng: I18N.UA,
    supportedLngs: LANGUAGES_AVAILABLE,
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
