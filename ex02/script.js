function mostrarMensagem(){
    const nomeDigitado = document.querySelector('#nome').value;
    const paragrafo = document.querySelector('#mensagem');
    const mensagem = `Olá ${nomeDigitado}`;

    paragrafo.innerHTML = mensagem;
}


const botao = document.querySelector('#botaoMensagem');

botao.addEventListener('click', mostrarMensagem)