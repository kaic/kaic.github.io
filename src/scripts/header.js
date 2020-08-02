import { insertText, loadTexts } from './view'
import { t, changeLanguage, getCurrentLanguage } from './i18n'

const translateBtnId = 'translate-btn'
const header = '_hello', slogan = '_slogan', location = '_location', about = '_about', skills = '_skills', contact = '_contact'

const enFlag = '🇺🇸'
const ptbrFlag = '🇧🇷'

export const loadHeaderTexts = async () => {
    insertText(header, t(header))
    insertText(slogan, t(slogan))
    insertText(location, t(location))
    insertText(about, t(about))
    insertText(skills, t(skills))
    insertText(contact, t(contact))
}

const changeLanguageBtnFunc = async () => {
    const currentLanguage = getCurrentLanguage()

    const newLang = currentLanguage === 'pt-br' ? 'en' : 'pt-br'
    await changeLanguage(newLang)

    changeFlag(newLang)

    await loadTexts()
}

export const loadTranslateBtn = () => {
    const currentLanguage = getCurrentLanguage()
    const translateBtn = document.getElementById(translateBtnId)

    changeFlag(currentLanguage)

    translateBtn.onclick = changeLanguageBtnFunc;
}


export const changeFlag = (currentLanguage) => {
    const flag = currentLanguage === 'pt-br' ? enFlag : ptbrFlag

    insertText(translateBtnId, flag)
}