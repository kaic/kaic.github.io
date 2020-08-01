export const insertText = (elementId, text) => {
    document.getElementById(elementId).innerText = text;
};

export const insertHTML = (elementId, HTML) => {
    document.getElementById(elementId).insertAdjacentHTML('beforeend', HTML)
};