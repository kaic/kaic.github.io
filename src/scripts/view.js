import { t } from './i18n'
import { MY_AGE } from './date'

const headerTextElements = [{ id: 't-hello', args: null }, { id: 't-slogan', args: null }, { id: 't-location-1', args: null }, { id: 't-location-2', args: null }, { id: 't-about-link', args: null }, { id: 't-career-link', args: null }, { id: 't-contact-link', args: null },]
const aboutTextElements = [{ id: 't-about-title', args: null }, { id: 't-about-p1', args: { MY_AGE } }, { id: 't-about-p2', args: null }, { id: 't-about-p3', args: null }, { id: 't-about-p4', args: null }, { id: 't-about-p5', args: null }]
const careerTextElements = [{ id: 't-career-title', args: null }]
const contactTextElements = [{ id: 't-contact-title', args: null }, { id: 't-contact-p1', args: null }]
const footerTextElements = [{ id: 't-footer-p1', args: null }, { id: 't-footer-sourcecode', args: null }, { id: 't-footer-p2', args: null }]

export const insertText = (elementId, text) => document.getElementById(elementId).innerText = text

export const insertHTML = (elementId, HTML) => document.getElementById(elementId).insertAdjacentHTML('beforeend', HTML)

export const loadArticleTexts = async (articleName, textsElements) =>
    await textsElements.map(element => insertText(element.id, t(`${articleName}.${element.id}`, element.args)))

export const loadTexts = async () => {
    await loadArticleTexts('header', headerTextElements)
    await loadArticleTexts('about-me', aboutTextElements)
    await loadArticleTexts('career', careerTextElements)
    await loadArticleTexts('contact', contactTextElements)
    await loadArticleTexts('footer', footerTextElements)
}

export const addScrollListener = () => {
    window.addEventListener("scroll", () => {
        const header = document.getElementById('nav-links')
        if (window.scrollY != 0) {
            header.classList.add('nav-links-with-shadows')
        } else {
            header.classList.remove('nav-links-with-shadows')
        }
    })
}
