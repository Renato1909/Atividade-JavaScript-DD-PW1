function nomeDoDia(numero) {
    // Usa switch para verificar cada número e retornar o dia correspondente.
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
        default:
            // Retorna para números fora do intervalo 1-7.
            return "Número inválido! Digite um número de 1 a 7.";
    }
}

function obterDia() {
    // Obtém o elemento de input onde o usuário digita o número.
    const numeroInput = document.getElementById('numeroDia');
    // Obtém o elemento onde será exibido o resultado.
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte o valor do input para número inteiro.
    const numero = parseInt(numeroInput.value);
    
    // Verifica se o valor é um número válido entre 1 e 7.
    if (isNaN(numero) || numero < 1 || numero > 7) {
        resultadoDiv.textContent = "Por favor, digite um número entre 1 e 7!";
        return;
    }
    
    // Chama a função principal que retorna o nome do dia.
    const dia = nomeDoDia(numero);
    
    // Exibe o resultado na tela
    resultadoDiv.textContent = `Dia da semana: ${dia}`;
}