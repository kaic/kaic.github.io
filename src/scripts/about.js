import { t } from './i18n'
import { MY_AGE } from './date'
import { insertText } from './view'

const about = '_aboutMe', aboutP1 = '_aboutP1', aboutP2 = '_aboutP2', curriculum = '_curriculum'

export const loadAboutTexts = async () => {
    insertText(about, t(about))
    insertText(aboutP1, t(aboutP1, { myAge: MY_AGE } ))
    insertText(aboutP2, t(aboutP2))
    insertText(curriculum, t(curriculum))
}