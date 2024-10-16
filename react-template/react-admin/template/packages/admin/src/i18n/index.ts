import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales";


i18n
	.use(initReactI18next)
	.init({
		resources: {
			zh: {
				translation: {
					...resources.zh
				}
			},
			en: {
				translation: {
					...resources.en
				}
			}
		},
		lng: "zh",
		fallbackLng: "zh",
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		initImmediate: false,
	});

export default i18n;
