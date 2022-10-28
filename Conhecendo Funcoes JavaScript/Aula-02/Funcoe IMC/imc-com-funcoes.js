
function IMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 38) {
        return 'Acima do peso';
    } else if (imc >= 38 && imc < 40) {
        return 'Obeso' ;
    } else{
        return 'Obsidade Greve';
    }
}

//Main
(function main() {
    const peso = 79;
    const altura = 1.82;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();





