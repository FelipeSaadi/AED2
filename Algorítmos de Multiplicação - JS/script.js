"use strict";

const multiplicando = 4321;
const multiplicador = 6789;
const unidMultiplicando = [4, 3, 2, 1];
const unidMultiplicador = [6, 7, 8, 9];
let total = 0;


// Multiplicação Americana
const calcMult = function (multiplicador, passo) {
    let i = unidMultiplicando.length - 1;
    let posicao = 1;
    switch (passo) {
        case 1:
            posicao *= 10;
            break;
        case 2:
            posicao *= 100;
            break;
        case 3:
            posicao *= 1000;
            break;
        case 4:
            posicao *= 10000;
    }

    while (i >= 0) {
        total += unidMultiplicando[i] * multiplicador * posicao;
        posicao *= 10;
        i--;
    }
}


calcMult(unidMultiplicador[3], 1);
calcMult(unidMultiplicador[2], 2);
calcMult(unidMultiplicador[1], 3);
calcMult(unidMultiplicador[0], 4);
console.log(total);
