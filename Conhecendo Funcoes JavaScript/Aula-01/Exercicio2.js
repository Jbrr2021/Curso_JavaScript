/*
        2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar indicação sobre a condições de peso de uma pessoa adulta.

        Formula do IMC:
        IMC = Peso / ( altura * altura)

        Elabore um algaritmo que dado o peso e a altura de um adulto mostre sua condições de acordo com a tabela abaixo.

        IMC em adulto Condições:
        - Abaixo de 18.5 Abaixo do peso;
        - Entre 18.5 e 25 Peso normal;
        - Entre 25 e 30 Acima do peso;
        - Entre 30 e 40 Obeso;
        - Acima de 40 Obsedidade Grave;
*/
const peso = 77;
const altura = 1.82;
const imc = peso / Math.pow(altura, 2); /* pow e uma função do objeto e Math uma classe */
console.log(imc);


