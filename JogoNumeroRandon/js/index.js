// Inicializa o número a ser adivinhado
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

var numTentativas = 0;

// Pega o elemento HTML do botão de envio
var botaoEnviar = document.getElementById("enviar");

// Pega o elemento HTML da lista de chutes
var listaChutes = document.getElementById("chutes");

// Pega o elemento HTML do botão de reiniciar
var botaoReiniciar = document.getElementById("reiniciar");

// Pega o elemento HTML do botão de som
var botaoSom = document.getElementById("som");

// Inicializa o som
var somLigado = true;

// Adiciona um evento de clique ao botão de envio
botaoEnviar.onclick = function() {
  // Pega o valor digitado pelo usuário
  var chute = parseInt(document.getElementById("chute").value);

  // Checa se o valor digitado é um número válido
  if (isNaN(chute) || chute < 1 || chute > 100) {
    alert("Por favor, digite um número entre 1 e 100.");
    return;
  }

  // Incrementa o número de tentativas
  numTentativas++;

  // Adiciona o chute do usuário à lista de chutes
  var novaLi = document.createElement("li");
  novaLi.textContent = "Chute #" + numTentativas + ": " + chute;
  listaChutes.appendChild(novaLi);

  // Diz o chute em voz alta (se o som estiver ligado)
  falarChute(chute);

  // Checa se o número digitado é o número secreto
  if (chute === numeroSecreto) {
    exibirMensagem("Parabéns! Você adivinhou o número em " + numTentativas + " tentativas.");
    finalizarJogo();
  } else {
    // Dá uma dica para o jogador
    var dica = (chute < numeroSecreto) ? "maior" : "menor";
    exibirMensagem("Tente novamente. O número secreto é " + dica + " do que o seu chute.");
  }
};

// Adiciona um evento de clique ao botão de reiniciar
botaoReiniciar.onclick = function() {
  reiniciarJogo();
};

// Adiciona um evento de clique ao botão de som
botaoSom.onclick = function() {
  somLigado = !somLigado;
};

// Função para ler o chute em voz alta
function falarChute(chute) {
  if (somLigado) {
    var utterance = new SpeechSynthesisUtterance("Chute " + numTentativas + ": " + chute);
    window.speechSynthesis.speak(utterance);
  }
}

// Função para exibir a mensagem na tela
function exibirMensagem(mensagem) {
  document.getElementById("mensagem").textContent = mensagem;
}

// Função para finalizar o jogo
function finalizarJogo() {
  // Desabilita o botão de envio
  botaoEnviar.disabled = true;

  // Desabilita o campo de chute
  document.getElementById("chute").disabled = true;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Gera um novo número secreto
  numeroSecreto =Math.floor(Math.random() * 100) + 1;

  // Reinicia o número de tentativas
  numTentativas = 0;
  
  // Limpa a lista de chutes
  listaChutes.innerHTML = "";
  
  // Habilita o botão de envio
  botaoEnviar.disabled = false;
  
  // Habilita o campo de chute
  document.getElementById("chute").disabled = false;
  
  // Exibe a mensagem inicial
  exibirMensagem("Tente adivinhar o número secreto entre 1 e 100.");
  
  // Reinicia o som
  somLigado = true;
  }