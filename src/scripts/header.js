import { insertText, loadTexts } from './view'
import { changeLanguage, getCurrentLanguage } from './i18n'

const EN_FLAG = '🇺🇸'
const PTBR_FLAG = '🇧🇷'

const TRANSL_BTN_ID = 'translate-btn'

const changeLanguageBtnFunc = async () => {
    const currentLanguage = getCurrentLanguage()

    const newLang = currentLanguage === 'pt-br' ? 'en' : 'pt-br'
    await changeLanguage(newLang)

    changeFlag(newLang)

    await loadTexts()
}

export const loadTranslateBtn = () => {
    const currentLanguage = getCurrentLanguage()
    const translateBtn = document.getElementById(TRANSL_BTN_ID)

    changeFlag(currentLanguage)

    translateBtn.onclick = changeLanguageBtnFunc;
}


export const changeFlag = (currentLanguage) => {
    const flag = currentLanguage === 'pt-br' ? EN_FLAG : PTBR_FLAG

    insertText(TRANSL_BTN_ID, flag)
}