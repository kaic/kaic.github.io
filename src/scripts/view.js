import { t } from './i18n'

const headerTextElements = ['t-hello', 't-slogan', 't-location', 't-about-link', 't-skills-link', 't-contact-link']
const aboutTextElements = ['t-about-title', 't-about-p1', 't-about-p2', 't-cv-link']
const skillsTextElements = ['t-skills-title', 't-skills-p1']
const careerTextElements = []
const educationTextElements = []
const contactTextElements = []
const footerTextElements = []

export const insertText = (elementId, text) => document.getElementById(elementId).innerText = text;

export const insertHTML = (elementId, HTML) => document.getElementById(elementId).insertAdjacentHTML('beforeend', HTML)

export const loadArticleTexts = async (articleName, textsElements) => 
    await textsElements.map(elemement => insertText(elemement, t(`${articleName}.${elemement}`)))

export const loadTexts = async () => {
    await loadArticleTexts('header', headerTextElements)
    await loadArticleTexts('about-me', aboutTextElements)
    await loadArticleTexts('skills', skillsTextElements)
    await loadArticleTexts('career', careerTextElements)
    await loadArticleTexts('education', educationTextElements)
    await loadArticleTexts('contact', contactTextElements)
    await loadArticleTexts('footer', footerTextElements) 
}