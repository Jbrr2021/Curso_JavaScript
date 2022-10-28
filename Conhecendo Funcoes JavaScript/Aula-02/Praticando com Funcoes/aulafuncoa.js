
function escrevaMeuNome(nome) {
    return 'Meu nome é' + nome;
}



function escrevaIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('João') + 'Maior de Idade');
    } else { (idade <= 18)
        console.log('Meno de Idade');
    }
}

escrevaIdade(18);