function podeDirigir(idade) {
    // Verifica se a idade é maior ou igual a 18.
    if (idade >= 18) {
        return "Pode ser habilitado(a)";
    } else {
        return "Ainda não pode";
    }
}

function verificarIdade() {
    // Obtém o elemento de input onde o usuário digita a idade.
    const idadeInput = document.getElementById('idade');
    // Obtém o elemento onde será exibido o resultado.
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte o valor do input para número.
    const idade = parseInt(idadeInput.value);
    
    // Verifica se o valor é um número válido.
    if (isNaN(idade) || idade < 0) {
        resultadoDiv.textContent = "Por favor, digite uma idade válida!";
        resultadoDiv.className = "resultado reprovado";
        return;
    }
    
    // Chama a função principal que verifica se pode dirigir.
    const resultado = podeDirigir(idade);
    
    // Exibe o resultado na tela.
    resultadoDiv.textContent = resultado;
    
    // Aplica estilo conforme o resultado.
    if (resultado === "Pode ser habilitado(a)") {
        resultadoDiv.className = "resultado aprovado";
    } else {
        resultadoDiv.className = "resultado reprovado";
    }
}