function tipoTriangulo(L1, L2, L3) {
    // Primeiro verifica se os lados formam um triângulo válido.
    // Regra: a soma de dois lados deve ser maior que o terceiro lado.
    if (L1 + L2 <= L3 || L1 + L3 <= L2 || L2 + L3 <= L1) {
        return "Não é um triângulo válido!";
    }
    
    // Verifica se todos os lados são iguais (Equilátero).
    if (L1 === L2 && L2 === L3) {
        return "Equilátero";
    } 
    // Verifica se pelo menos dois lados são iguais (Isósceles).
    else if (L1 === L2 || L1 === L3 || L2 === L3) {
        return "Isósceles";
    } 
    // Se nenhum lado é igual (Escaleno).
    else {
        return "Escaleno";
    }
}

function classificarTriangulo() {
    // Obtém os elementos dos três inputs de lados.
    const lado1Input = document.getElementById('lado1');
    const lado2Input = document.getElementById('lado2');
    const lado3Input = document.getElementById('lado3');
    const resultadoDiv = document.getElementById('resultado');
    
    // Converte os valores para números
    const L1 = parseFloat(lado1Input.value);
    const L2 = parseFloat(lado2Input.value);
    const L3 = parseFloat(lado3Input.value);
    
    // Verifica se todos os valores são números válidos e positivos.
    if (isNaN(L1) || isNaN(L2) || isNaN(L3) || L1 <= 0 || L2 <= 0 || L3 <= 0) {
        resultadoDiv.textContent = "Por favor, digite valores válidos para os três lados!";
        resultadoDiv.className = "resultado invalido";
        return;
    }
    
    // Chama a função principal que classifica o triângulo.
    const tipo = tipoTriangulo(L1, L2, L3);
    
    // Exibe o resultado na tela
    resultadoDiv.textContent = `Tipo: ${tipo}`;
    
    // Aplica estilo conforme o tipo de triângulo.
    if (tipo === "Equilátero") {
        resultadoDiv.className = "resultado equilatero";
    } else if (tipo === "Isósceles") {
        resultadoDiv.className = "resultado isosceles";
    } else if (tipo === "Escaleno") {
        resultadoDiv.className = "resultado escaleno";
    } else {
        resultadoDiv.className = "resultado invalido";
    }
}