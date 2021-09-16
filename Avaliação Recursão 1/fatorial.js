"use strict"

const fatorialIterativo = (valor, resultado = valor) => {
    if (valor === 0) {
        return 1
    }
    while (valor !== 1) {
        valor--
        resultado *= valor
    }
    return resultado
}

const fatorial = (valor, resultado = valor) => {
    if (valor === 0) {
        return 1
    }
    if (valor === 1) {
        return resultado
    } else {
        resultado *= valor - 1
        return fatorial(valor - 1, resultado)
    }
}

console.log(fatorialIterativo(5))
console.log(fatorialIterativo(8))
console.log(fatorialIterativo(0))

console.log(fatorial(5))
console.log(fatorial(8))
console.log(fatorial(0))