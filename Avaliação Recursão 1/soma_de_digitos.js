"use strict"

const valor = 250

const somaDigitosIterativo = (numero = String(valor), resultado = 0) => {
    let step = 0
    while (step < numero.length) {
        resultado += Number(numero[step])
        step++
    }
    return resultado
}

const somaDigitos = (numero = String(valor), step = 0, resultado = 0) => {
    if (step >= numero.length) {
        return resultado
    }
    resultado += Number(numero[step])
    return somaDigitos(numero, step + 1, resultado)
}

console.log(somaDigitosIterativo())
console.log(somaDigitos())