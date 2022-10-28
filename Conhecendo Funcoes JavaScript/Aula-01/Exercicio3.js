/*
        3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta de etiqueta e a escolha da condição de pagamento.
        Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequando.

        Código Condição de pagamento:
        1 - Á vista Débito, recebe 10% de desconto;
        2 - Á vista do Dinheiro ou Pix, receber 15% de desconto;
        3 - Em duas vezes, preço normal de etiqueta sem juros;
        4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function criarDesconto(valor, desconto) {
return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(criarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(criarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

/*      porcetagem se conta casa decimais
        console.log(200 * 0.10);
        console.log(10 / 100);
*/