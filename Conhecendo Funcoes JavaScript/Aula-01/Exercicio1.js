/*   
     1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

     Média = (nota 1 + nota 2 + nota 3) / 3;

     Classificação:
     - Média menor que 5, reprovação;
     - Média entre 5 e 7, recuperaçõa;
     - Média acima de 7, passou de semestre;
*/
const not_1 = 5;
const not_2 = 3;
const not_3 = 7;
const media = (not_1 + not_2 + not_3) / 3;
console.log(media);

if (media < 5) {
     console.log('Reprovação')
} else if (media >= 5 && media <= 7) {
     console.log('Recuperação');
} else {
     console.log('Passou de semestre')
}