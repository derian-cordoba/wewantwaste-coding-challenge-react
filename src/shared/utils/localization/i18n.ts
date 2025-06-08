import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetectorModule from "i18next-browser-languagedetector";
import IntervalPlural from "i18next-intervalplural-postprocessor";

import { supportedLanguageIdentifiers, defaultLanguage } from "./languages";
import { namespaces } from "./namespaces";

i18next
  .use(I18NextHttpBackend)
  .use(LanguageDetectorModule)
  .use(initReactI18next)
  .use(IntervalPlural)
  .init({
    supportedLngs: supportedLanguageIdentifiers,
    ns: namespaces,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: defaultLanguage,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
