// Variável para armazenar a pontuação de acertos
let pontuacao = 0;

function jogar() {
    // Captura os elementos do HTML
    const inputChute = document.getElementById('chute');
    const elementoResultado = document.getElementById('resultado');
    const elementoPontuacao = document.getElementById('pontuacao');
    
    // Converte o valor digitado pelo usuário para número inteiro
    const chuteUsuario = parseInt(inputChute.value);

    // Validação: Garante que o usuário digitou um número entre 1 e 10
    if (isNaN(chuteUsuario) || chuteUsuario < 1 || chuteUsuario > 10) {
        elementoResultado.textContent = "Digite um número válido de 1 a 10!";
        elementoResultado.className = "mensagem";
        return;
    }

    // Gerar um número aleatório de 1 a 10
    const numeroSorteado = Math.floor(Math.random() * 10) + 1;

    // Lógica do acerto/erro
    if (chuteUsuario === numeroSorteado) {
        elementoResultado.textContent = "VOCÊ ACERTOU!";
        elementoResultado.className = "mensagem acertou";
        
        // Incrementar a pontuação
        pontuacao++;
        elementoPontuacao.textContent = pontuacao;
    } else {
        elementoResultado.textContent = `ERROOOOOOOUUUUUU! (O número era ${numeroSorteado})`;
        elementoResultado.className = "mensagem errou";
    }

    // Limpa o campo de entrada e foca novamente nele para a próxima tentativa
    inputChute.value = "";
    inputChute.focus();
}