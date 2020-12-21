import { t } from './i18n'
import { MY_AGE } from './date'

const headerTextElements = [{ id: 't-hello', args: null }, { id: 't-slogan', args: null }, { id: 't-location', args: null }, { id: 't-about-link', args: null }, { id: 't-publications-link', args: null }, { id: 't-contact-link', args: null }, ]
const aboutTextElements = [{ id: 't-about-title', args: null }, { id: 't-about-p1', args: { MY_AGE }}, { id: 't-about-p2', args: null }, { id: 't-about-p3', args: null }, { id: 't-about-p4', args: null }, { id: 't-about-p5', args: null }]
const skillsTextElements = [{ id: 't-skills-title', args: null }, { id: 't-skills-p1', args: null }]
const publicationsTextElements = [{ id: 't-publications-title', args: null }, { id: 't-publications-p1', args: null }]
const careerTextElements = []
const educationTextElements = []
const contactTextElements = []
const footerTextElements = []

export const insertText = (elementId, text) => document.getElementById(elementId).innerText = text;

export const insertHTML = (elementId, HTML) => document.getElementById(elementId).insertAdjacentHTML('beforeend', HTML)

export const loadArticleTexts = async (articleName, textsElements) =>
    await textsElements.map(element => insertText(element.id, t(`${articleName}.${element.id}`, element.args)))

export const loadTexts = async () => {
    await loadArticleTexts('header', headerTextElements)
    await loadArticleTexts('about-me', aboutTextElements)
    await loadArticleTexts('publications', publicationsTextElements)
    await loadArticleTexts('skills', skillsTextElements)
    await loadArticleTexts('career', careerTextElements)
    await loadArticleTexts('education', educationTextElements)
    await loadArticleTexts('contact', contactTextElements)
    await loadArticleTexts('footer', footerTextElements)
}