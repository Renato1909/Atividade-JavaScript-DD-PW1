function checarTemperatura(temperatura) {
    // Verifica se a temperatura está abaixo de 10°C (frio).
    if (temperatura < 10) {
        return "❄️ Alerta de Frio";
    } 
    // Verifica se a temperatura está entre 10°C e 25°C (ideal).
    else if (temperatura >= 10 && temperatura <= 25) {
        return "🌡️ Temperatura Ideal";
    } 
    // Se não for frio nem ideal, então está acima de 25°C (calor).
    else {
        return "🔥 Alerta de Calor";
    }
}

function checarTemp() {
    // Obtém o elemento de input onde o usuário digita a temperatura.
    const tempInput = document.getElementById('temperatura');
    // Obtém o elemento onde será exibido o resultado.
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte o valor do input para número.
    const temperatura = parseFloat(tempInput.value);
    
    // Verifica se o valor é um número válido
    if (isNaN(temperatura)) {
        resultadoDiv.textContent = "Por favor, digite uma temperatura válida!";
        resultadoDiv.className = "resultado";
        return;
    }
    
    // Chama a função principal que classifica a temperatura.
    const classificacao = checarTemperatura(temperatura);
    
    // Exibe o resultado na tela
    resultadoDiv.textContent = classificacao;
    
    // Aplica estilo conforme a classificação da temperatura.
    if (classificacao.includes("Frio")) {
        resultadoDiv.className = "resultado frio";
    } else if (classificacao.includes("Ideal")) {
        resultadoDiv.className = "resultado ideal";
    } else {
        resultadoDiv.className = "resultado calor";
    }
}