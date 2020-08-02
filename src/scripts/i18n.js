import i18next from 'i18next'

import en from '../assets/jsons/i18n/en.json'
import ptbr from '../assets/jsons/i18n/ptbr.json'

const configs = {
    lng: 'pt-br',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development' ? true : false,
    resources: { pt: ptbr, en }
}

export const t = (text, args) => i18next.t(text, args)

export const changeLanguage = async (lang) => await i18next.changeLanguage(lang)

export const initI18n = async () => await i18next.init(configs)

export const getCurrentLanguage = () => i18next.language;