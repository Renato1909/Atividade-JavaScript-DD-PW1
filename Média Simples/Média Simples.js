function calcularMediaSimples(N1, N2) {
    // Calcula a média simples dos dois números.
    let media = (N1 + N2) / 2;
    
    // Verifica se a média é maior ou igual a 7 (aprovado).
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function calcularMedia() {
    // Obtém os elementos dos inputs de notas.
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte os valores para números decimais.
    const N1 = parseFloat(nota1Input.value);
    const N2 = parseFloat(nota2Input.value);
    
    // Verifica se ambas as notas são números válidos entre 0 e 10.
    if (isNaN(N1) || isNaN(N2) || N1 < 0 || N1 > 10 || N2 < 0 || N2 > 10) {
        resultadoDiv.textContent = "Por favor, digite notas válidas entre 0 e 10!";
        resultadoDiv.className = "resultado";
        return;
    }
    
    // Chama a função principal que calcula a média e verifica aprovação.
    const resultado = calcularMediaSimples(N1, N2);
    
    // Calcula a média para exibir junto com o resultado.
    const media = (N1 + N2) / 2;
    
    // Exibe o resultado na tela com a média calculada.
    resultadoDiv.textContent = `Média: ${media.toFixed(1)} - ${resultado}`;
    
    // Aplica estilo conforme o resultado (aprovado/reprovado).
    if (resultado === "Aprovado") {
        resultadoDiv.className = "resultado aprovado";
    } else {
        resultadoDiv.className = "resultado reprovado";
    }
}