function formatarTelefone(numero) {
    // Usa slice para dividir a string em duas partes:
    // - Primeiros 4 dígitos (posições 0 a 3).
    // - Últimos 4 dígitos (posições 4 a 7).
    let primeiraParte = numero.slice(0, 4);
    let segundaParte = numero.slice(4, 8);
    
    // Retorna as partes unidas com hífen
    return primeiraParte + "-" + segundaParte;
}

function formatarTel() {
    // Obtém o elemento de input onde o usuário digita o número.
    const telefoneInput = document.getElementById('numeroTelefone');
    // Obtém o elemento onde será exibido o resultado.
    const resultadoDiv = document.getElementById('resultado');
    
    // Obtém o valor digitado no input e remove espaços em branco.
    const numero = telefoneInput.value.trim();
    
    // Verifica se o número tem exatamente 8 dígitos e contém apenas números.
    if (numero.length !== 8 || !/^\d+$/.test(numero)) {
        resultadoDiv.textContent = "Por favor, digite exatamente 8 dígitos!";
        resultadoDiv.style.background = "#f8d7da";
        resultadoDiv.style.color = "#721c24";
        return;
    }
    
    // Chama a função principal que formata o telefone.
    const telefoneFormatado = formatarTelefone(numero);
    
    // Exibe o resultado na tela.
    resultadoDiv.textContent = telefoneFormatado;
    resultadoDiv.style.background = "#333";
    resultadoDiv.style.color = "#fff";
}