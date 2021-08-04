"use strict";

const valor1 = 4321;
const valor2 = 6789;
const unidMultiplicando = [4, 3, 2, 1];
const unidMultiplicador = [6, 7, 8, 9];
let total = 0;


// Adição
const calcAdicao = function (valor1, valor2) {
    let parcela1 = numParaArray(valor1);
    let parcela2 = numParaArray(valor2);

    let contParcela1 = parcela1.length - 1;
    let contParcela2 = parcela2.length - 1;

    let somatoria = 0, soma = 0;
    let casa = 1;


    while (contParcela1 >= 0 && contParcela2 >= 0) {
        somatoria = parcela1[contParcela1] + parcela2[contParcela2];
        soma += (somatoria * casa)
        casa *= 10;
        contParcela1--;
        contParcela2--;
    }
    while (contParcela1 >= 0) {
        soma += parcela1[contParcela1] * casa;
        casa *= 10
        contParcela1--;
    } while (contParcela2 >= 0) {
        soma += parcela2[contParcela2] * casa;
        casa *= 10
        contParcela2--;
    }
    return soma;
}
const numParaArray = function (valor) {
    return valor.toString(10).split('').map(Number)
}

console.log(calcAdicao(40, 41))

// Multiplicação Americana
const calcMultAmerican = function (multiplicador, passo) {
    let i = unidMultiplicando.length - 1;
    let posicao = 1;
    switch (passo) {
        case 1:
            posicao *= 1;
            break;
        case 2:
            posicao *= 10;
            break;
        case 3:
            posicao *= 100;
            break;
        case 4:
            posicao *= 1000;
    }

    while (i >= 0) {
        total += unidMultiplicando[i] * multiplicador * posicao;
        posicao *= 10;
        i--;
    }
}


calcMultAmerican(unidMultiplicador[3], 1);
calcMultAmerican(unidMultiplicador[2], 2);
calcMultAmerican(unidMultiplicador[1], 3);
calcMultAmerican(unidMultiplicador[0], 4);
console.log(total);

const calcMultRusso = function (valor1, valor2) {
    let multiplicando = valor1;
    let multiplicador = valor2;
    let imparesCalc = 0;

    while (multiplicando !== 0) {
        if (multiplicando % 2 !== 0) {
            imparesCalc += multiplicador;
        }

        multiplicando = Math.floor(multiplicando / 2);
        multiplicador *= 2;
    }
    return console.log(imparesCalc);
}
calcMultRusso(37, 550);