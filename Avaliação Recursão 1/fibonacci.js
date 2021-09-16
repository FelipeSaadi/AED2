"use strict"

const fibonacciIterativo = (indice, valor = 1, anterior = 0) => {
    let aux = 0
    if (indice === 0) {
        return anterior
    }
    while (indice !== 1) {
        aux = valor
        valor = valor + anterior
        anterior = aux
        indice--
    }
    return anterior
}

const fibonacci = (indice, anterior = 0, valor = 1) => {
    if (indice === 1) {
        return anterior
    }
    return fibonacci(indice - 1, valor + anterior, valor = anterior)
}

console.log(fibonacci(1))
console.log(fibonacci(8))
console.log(fibonacciIterativo(1))
console.log(fibonacciIterativo(8))