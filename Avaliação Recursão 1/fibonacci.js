"use strict"

const fibonacci = (indice, anterior = 0, valor = 1) => {
    if (indice === 0 || indice === 1) {
        return anterior
    }
    return fibonacci(indice - 1, valor + anterior, valor = anterior)
}

console.log(fibonacci(8))