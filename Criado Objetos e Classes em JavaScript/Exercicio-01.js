/*
        1 - Crie uma classe para representar carros.
        Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
        Crie um método que dado a quantidade de quilomentro e o preço do combustivel nos de o valor
        gasto em reais para realizar este percurso.
*/

class Carros {

    marca;
    cor;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

 calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
 }
}

const chevete = new Carros('Fiat', 'Prata', 1 / 12);
console.log(chevete.calcularGastoDePercurso(80, 5));
const siena = new Carros('Fiat', 'Branco', 1/10);
console.log(siena.calcularGastoDePercurso(80, 5));


