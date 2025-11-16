function encontrarMaiorEntreTres(a, b, c) {
    // Verifica se 'a' é o maior número.
    if (a > b && a > c) {
        return a;
    } 
    // Verifica se 'b' é o maior número.
    else if (b > a && b > c) {
        return b;
    } 
    // Se não for 'a' nem 'b', então 'c' é o maior.
    else {
        return c;
    }
}

function encontrarMaior() {
    // Obtém os elementos dos três inputs.
    const num1 = document.getElementById('numero1');
    const num2 = document.getElementById('numero2');
    const num3 = document.getElementById('numero3');
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte os valores para números.
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const c = parseFloat(num3.value);
    
    // Verifica se todos os valores são números válidos..
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultadoDiv.textContent = "Por favor, digite números válidos em todos os campos!";
        return;
    }
    
    // Chama a função principal que encontra o maior número.
    const maior = encontrarMaiorEntreTres(a, b, c);
    
    // Exibe o resultado na tela
    resultadoDiv.textContent = `O maior número é: ${maior}`;
}