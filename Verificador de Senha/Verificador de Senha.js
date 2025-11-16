function senhaForte(senha) {
    // Verifica se a senha tem mais de 8 caracteres E não é "12345678".
    if (senha.length > 8 && senha !== "12345678") {
        return true;
    } else {
        return false;
    }
}

function verificarSenha() {
    // Obtém o elemento de input onde o usuário digita a senha.
    const senhaInput = document.getElementById('senha');
    // Obtém o elemento onde será exibido o resultado
    const resultadoDiv = document.getElementById('resultado');
    
    // Obtém o valor digitado no input.
    const senha = senhaInput.value;
    
    // Verifica se a senha foi digitada.
    if (senha === "") {
        resultadoDiv.textContent = "Por favor, digite uma senha!";
        resultadoDiv.className = "resultado fraca";
        return;
    }
    
    // Chama a função principal que verifica se a senha é forte.
    const ehForte = senhaForte(senha);
    
    // Exibe o resultado na tela
    if (ehForte) {
        resultadoDiv.textContent = "✅ Senha Forte!";
        resultadoDiv.className = "resultado forte";
    } else {
        resultadoDiv.textContent = "❌ Senha Fraca!";
        resultadoDiv.className = "resultado fraca";
    }
}