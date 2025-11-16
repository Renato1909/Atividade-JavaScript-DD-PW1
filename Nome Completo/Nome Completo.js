function gerarNomeCompleto(pessoa) {
    // Concatena primeiroNome e sobrenome com um espaço entre eles
    return pessoa.primeiroNome + " " + pessoa.sobrenome;
}

function gerarNome() {
    // Obtém os elementos dos inputs de primeiro nome e sobrenome
    const primeiroNomeInput = document.getElementById('primeiroNome');
    const sobrenomeInput = document.getElementById('sobrenome');
    const resultadoDiv = document.getElementById('resultado');
    
    // Obtém os valores digitados nos inputs
    const primeiroNome = primeiroNomeInput.value.trim();
    const sobrenome = sobrenomeInput.value.trim();
    
    // Verifica se ambos os campos foram preenchidos
    if (primeiroNome === "" || sobrenome === "") {
        resultadoDiv.textContent = "Por favor, preencha ambos os campos!";
        resultadoDiv.style.background = "#f8d7da";
        resultadoDiv.style.color = "#721c24";
        return;
    }
    
    // Cria um objeto com os dados da pessoa
    const pessoa = {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome
    };
    
    // Chama a função principal que gera o nome completo
    const nomeCompleto = gerarNomeCompleto(pessoa);
    
    // Exibe o resultado na tela
    resultadoDiv.textContent = nomeCompleto;
    resultadoDiv.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    resultadoDiv.style.color = "white";
}