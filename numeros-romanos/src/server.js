import {
  indoArabianToRoman,
  romanToIndoArabian
} from './numeral'

const indoArabe = 44
const roman = 'XLIV'

console.log(`Indo-Árabe: ${indoArabe} para Romano: ${indoArabianToRoman(indoArabe)}`)
console.log(`Romano: ${roman} para Indo-Árabe: ${romanToIndoArabian(roman)}`)