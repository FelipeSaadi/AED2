"use strict"

const valores = [5, 10, 15, 20]
const somaValores = (numeros = valores, step = 0, resultado = 0) => {
    if (step >= numeros.length) {
        return resultado
    } else {
        resultado += numeros[step]
        return somaValores(numeros, step + 1, resultado)
    }
}

console.log(somaValores())
console.log(somaValores([4, 5, 7, 5, 3]))