/* Faça um programa para calcular o valor de uma viagem.

Você terá a variáveis. Sendo elas:
1 - Preço do etanol:
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto medio de combustivel do carro por KM;
5 - Distancia em KM da viagem:

imprima no console o valor que será gasto para realizar rsta viagem.
*/
const precoEtanol = 3.37;
const precoGasolina = 5.39;
const KmPorLitro = 13.0;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoCnsumidor * precoEtanol;
    console.log(valorGasto.toFixed(2)); 
} else { 
  const valorGasto = litrosConsumidos * precoCnsumidor * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
