import { insertText } from './view'

const MY_BIRTHDATE = new Date(1998, 6, 12)

const calculateAge = birthdate => {
    const dateDiffMs = Date.now() - birthdate.getTime()
    const ageDate = new Date(dateDiffMs)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const YEAR = new Date().getUTCFullYear()
export const MY_AGE = calculateAge(MY_BIRTHDATE)

insertText('year', YEAR)