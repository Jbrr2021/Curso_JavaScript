/*Faça um programa para calcular o valor de uma viagem.

Você tera 3 variaveis, Sendo elas:
1 -- Preço do combustivel:
2 -- Gasto medio de combustivel do carro por KM;
3 -- Distancia em KM da Viagem;
*/

const precoCombustivel = 5.29;
const kmPorLitros = 11.2;
const distanciaEmKm = 80;

const listrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = listrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));