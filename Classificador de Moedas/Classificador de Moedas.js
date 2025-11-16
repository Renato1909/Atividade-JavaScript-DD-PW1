function classificarMoeda(valor) {
    // Compara o valor com cada tipo de moeda conhecido.
    if (valor === 0.01) {
        return "Um Centavo";
    } else if (valor === 0.05) {
        return "Cinco Centavos";
    } else if (valor === 0.10) {
        return "Dez Centavos";
    } else if (valor === 0.25) {
        return "Vinte e Cinco Centavos";
    } else if (valor === 0.50) {
        return "Cinquenta Centavos";
    } else if (valor === 1.00) {
        return "Um Real";
    } else {
        // Retorna para valores não reconhecidos.
        return "Valor Desconhecido";
    }
}

function classificar() {
    // Obtém o elemento de input onde o usuário digita o valor.
    const valorInput = document.getElementById('valorMoeda');
    // Obtém o elemento onde será exibido o resultado.
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte o valor do input para número decimal.
    const valor = parseFloat(valorInput.value);
    
    // Verifica se o valor é um número válido
    if (isNaN(valor) || valor < 0) {
        resultadoDiv.textContent = "Por favor, digite um valor válido!";
        resultadoDiv.className = "resultado desconhecido";
        return;
    }
    
    // Chama a função principal que classifica a moeda.
    const classificacao = classificarMoeda(valor);
    
    // Exibe o resultado na tela
    resultadoDiv.textContent = classificacao;
    
    // Aplica estilo conforme o resultado.
    if (classificacao === "Valor Desconhecido") {
        resultadoDiv.className = "resultado desconhecido";
    } else {
        resultadoDiv.className = "resultado reconhecido";
    }
}