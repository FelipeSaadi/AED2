"use strict"

const valores = [5, 10, 15, 20]

const somaValoresIterativo = (numeros = valores, step = 0, resultado = 0) => {
    while (step < numeros.length) {
        resultado += numeros[step]
        step++
    }
    return resultado
}

const somaValores = (numeros = valores, step = 0, resultado = 0) => {
    if (step >= numeros.length) {
        return resultado
    } else {
        resultado += numeros[step]
        return somaValores(numeros, step + 1, resultado)
    }
}

console.log(somaValoresIterativo())
console.log(somaValoresIterativo([4, 5, 7, 5, 3]))
console.log(somaValores())
console.log(somaValores([4, 5, 7, 5, 3]))