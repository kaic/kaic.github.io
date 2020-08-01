import { insertText } from './view';
import { t, changeLanguage, getCurrentLanguage } from './i18n';

const translateBtnId = 'translate-btn'
const header = '_hello', slogan = '_slogan', location = '_location', about = '_about', skills = '_skills', contact = '_contact';

const en = '🇺🇸';
const ptbr = '🇧🇷';

export const loadHeaderTexts = async () => {
    insertText(header, t('Olá! Meu nome é'));
    insertText(slogan, t('e eu desenvolvo software para o sec XXI'));
    insertText(location, t('🌎 São Paulo, Brasil'));
    insertText(about, t('👨🏽‍💻 Sobre Mim'));
    insertText(skills, t('🧠  Minhas Skills'));
    insertText(contact, t('📫 Contato'));
}

const changeLanguageBtnFunc = async () => {
    const currentLanguage = getCurrentLanguage();

    const newLang = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
    await changeLanguage(newLang)

    changeFlag(newLang)

    await loadHeaderTexts()
}

export const loadTranslateBtn = () => {
    const currentLanguage = getCurrentLanguage();
    const translateBtn = document.getElementById(translateBtnId);

    changeFlag(currentLanguage)

    translateBtn.onclick = changeLanguageBtnFunc;
}


export const changeFlag = (currentLanguage) => {
    const flag = currentLanguage === 'pt-br' ? en : ptbr;

    insertText(translateBtnId, flag)
}