"use strict";

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
    return console.log(`A soma de ${valor1} e ${valor2} é: ${soma}`);
}
const numParaArray = function (valor) {
    return valor.toString(10).split('').map(Number)
}

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
    return console.log(`A multiplicação de ${valor1} e ${valor2} é: ${imparesCalc}`);
}
let t0 = performance.now();
console.log("Todas as somas:");
calcAdicao(5, 1);
calcAdicao(25, 50);
calcAdicao(704, 650);
calcAdicao(2500, 7686);
calcAdicao(79500, 48600);
calcAdicao(586890, 148989);
calcAdicao(9248604, 4686401);
calcAdicao(89789105, 64876254);
calcAdicao(484812348, 213167976);
calcAdicao(1382347829, 4689791014);
let t1 = performance.now();
console.log(`Tempo de execução das somas: ${t1 - t0}`);

t0 = performance.now();
console.log("Todas as multiplicações:");
calcMultRusso(4, 6);
calcMultRusso(82, 40);
calcMultRusso(680, 247);
calcMultRusso(8489, 9213);
calcMultRusso(21359, 46798);
calcMultRusso(679824, 621486);
calcMultRusso(4897891, 9792446);
calcMultRusso(21344678, 23467899);
calcMultRusso(484812348, 213167976);
calcMultRusso(1382347829, 4689791014);
t1 = performance.now();
console.log(`Tempo de execução das multiplações: ${t1 - t0}`);