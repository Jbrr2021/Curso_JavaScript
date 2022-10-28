/* O obejeto do JavaScript e uma coleção dinamica de chave e valor
   Objetos literais. 
*/

class Pessoa{

    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasciento = 2022 - idade;
    }

    descreva() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const João = new Pessoa(João, 36);
const Karen = new Pessoa(Karen, 28);

João.descreva();
Karen.descreva();








