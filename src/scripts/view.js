import { loadAboutTexts } from './about.js'
import { loadHeaderTexts } from './header.js'

export const insertText = (elementId, text) => {
    document.getElementById(elementId).innerText = text;
};

export const insertHTML = (elementId, HTML) => {
    document.getElementById(elementId).insertAdjacentHTML('beforeend', HTML)
};

export const loadTexts = async () => {
    await loadHeaderTexts()
    await loadAboutTexts()
}