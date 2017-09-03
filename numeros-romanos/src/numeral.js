/**
 * numeral module.
 * @module numeros-romanos/numeral
 */

/** Numeros Romanos => Indo Arabe */
const ROMAN_NUMERALS = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

/**
 * Converte numero indo-arabe para romano
 * @example
 *    indoArabianToRoman(44) // XLIV
 * @param {number} indoArabian  - numero arabe
 * @return {string} - numero romano
 */
const indoArabianToRoman = (indoArabian) => {
  let romanMap = new Map()
  let strRomanNumber = ''
  let indoArabianNumber = +indoArabian

  Object.keys(ROMAN_NUMERALS).forEach((key) => {
    let val = ROMAN_NUMERALS[key]
    while (indoArabianNumber >= val) {
      if (!romanMap.get(key)) {
        romanMap.set(key, 0)
      }
      let mapKey = romanMap.get(key) + 1
      romanMap.set(key, mapKey)
      indoArabianNumber -= val
    }
  })
  romanMap.forEach((value, key) => {
    strRomanNumber += key.repeat(value)
  })
  return strRomanNumber
}

/**
 * Converte numero romano para indo-arabe
 * @example 
 *    romanToIndoArabian('XLIV') // 44
 * @param {string} strRomanNumber - numero romano
 * @return {number} - numero indo arabe
 */
const romanToIndoArabian = (strRomanNumber) => {
  let subtract = 0
  let add = 0

  Object.keys(ROMAN_NUMERALS).forEach((romanNumberKey) => {
    if (strRomanNumber.indexOf(romanNumberKey) > -1) {
      if (romanNumberKey.length === 2) {
        subtract += (ROMAN_NUMERALS[romanNumberKey.substr(0, 1)] * 2)
      }
    }
  })

  let arrRomanNumber = strRomanNumber.split('')
  arrRomanNumber.forEach((key) => {
    let val = ROMAN_NUMERALS[key]
    add += val
  })
  return (add - subtract)
}

export {
  indoArabianToRoman,
  romanToIndoArabian
}
