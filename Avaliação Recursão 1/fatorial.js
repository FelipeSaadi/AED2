"use strict"

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

console.log(fatorial(5))
console.log(fatorial(8))
console.log(fatorial(0))