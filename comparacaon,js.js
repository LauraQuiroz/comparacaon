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
