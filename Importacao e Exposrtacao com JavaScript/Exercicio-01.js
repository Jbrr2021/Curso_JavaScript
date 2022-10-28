
const { gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    numerosSorteados.push(numerosSorteados);    
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteados = numerosSorteados[i];
    if (numerosSorteados > maiorValor) {
        maiorValor = numerosSorteados;
    }
    
}

print(maiorValor);


/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saida:
    98

*/