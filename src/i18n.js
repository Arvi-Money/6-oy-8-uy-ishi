import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from './lang/lang.json'



i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "uzb",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;