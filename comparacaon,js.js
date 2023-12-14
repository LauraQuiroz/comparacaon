/* Objetivo: Construir uma função capaz de receber 2 números y verificar qual é o maior. Retornar e gerar um alert com o texto: "O número X é maior que Y" para quando os números forem diferentes,respeitando a ordem de quemé a maior que o outro, ou "O número X é igual a Y" para quando os números foremiguais.
Usar os recursos: prompt, alert, if/else, return e function*/

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        alert("O número " + num1 + " é maior que " + num2);
        return num1;
    } else if (num2 > num1) {
        alert("O número " + num2 + " é maior que " + num1);
        return num2;
    } else {
        alert("O número " + num1 + " é igual a " + num2);
        return null;  // ou qualquer valor que você quiser retornar para indicar igualdade
    }
}

// Exemplo de uso:
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

var resultado = compararNumeros(numero1, numero2);
console.log("O número maior (ou null se forem iguais) é:", resultado);

