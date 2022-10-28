class Pessoa{

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descreva() {
        console.log(`Maeu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.idade}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);

    }
}

const João = new Pessoa('João', 36);
const Karen = new Pessoa('Karen', 28);

compararPessoas(João, Karen);

/* 
    Usando os objetos para agregar um monte de valores de uma forma faciel de entender. 
*/