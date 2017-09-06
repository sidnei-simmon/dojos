/**
 * spire module.
 * @module matriz-espiral/spire
 */

 /** Matriz Espiral  */
const matriz = []

/**
 * Converte numero indo-arabe para romano
 * @example
 *    createSpire(3,8) 
 *
   [ [ 1, 2, 3 ],
    [ 18, 19, 4 ],
    [ 17, 20, 5 ],
    [ 16, 21, 6 ],
    [ 15, 22, 7 ],
    [ 14, 23, 8 ],
    [ 13, 24, 9 ],
    [ 12, 11, 10 ] ]
 * 
 * @return {array} - a matriz espiral
 * @param {number} columns  - numero de columns da matriz
 * @param {number} lines  - numero de lines da matriz 
 */
const createSpire = (columns, lines) => {

    for (let i = 0; i < lines; i++) {
        matriz[i] = [i]
    }
    return doTransformation({
        matriz: matriz,
        columns: columns,
        lines: lines
    })
}

/**
 * Converte a matriz em epiral
 * @param {array} matriz - matriz a ser convertida
 * @param {number} columns  - numero de columns da matriz
 * @param {number} lines  - numero de lines da matriz
 */
const doTransformation = ({matriz,columns,lines}) => {

    let currentIndex = 1;
    let lastIndex = ((columns * lines) + 1);
    let column = 0
    let line = 0

    while (currentIndex < lastIndex) {

        let horizontalLine = column
        for (horizontalLine; horizontalLine < (columns - column); horizontalLine++) {
            matriz[line][horizontalLine] = currentIndex
            currentIndex++
        }

        if (currentIndex == lastIndex) break

        horizontalLine--

        let verticalLine = (line + 1)
        for (verticalLine; verticalLine < (lines - line); verticalLine++) {
            matriz[verticalLine][horizontalLine] = currentIndex
            currentIndex++
        }

        if (currentIndex == lastIndex) break

        horizontalLine--
        verticalLine--

        horizontalLine = ((columns - column) - 1)
        for (horizontalLine; horizontalLine > column; horizontalLine--) {
            matriz[verticalLine][horizontalLine - 1] = currentIndex
            currentIndex++
        }

        if (currentIndex == lastIndex) break

        verticalLine = ((lines - line) - 2)
        for (verticalLine; verticalLine > line; verticalLine--) {
            matriz[verticalLine][horizontalLine] = currentIndex
            currentIndex++
        }
        line++
        column++
    }
    return matriz
}

export default createSpire