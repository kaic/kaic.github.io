import { t } from './i18n'
import { MY_AGE } from './date'
import { insertText } from './view'

const about = '_aboutMe', about1 = '_about1', about2 = '_about2', curriculum = '_curriculum'

export const loadAboutTexts = async () => {
    insertText(about, t(about))
    insertText(about1, t(about1, { myAge: MY_AGE } ))
    insertText(about2, t(about2))
    insertText(curriculum, t(curriculum))
}