function mostrarMensagem(){
    const nomeDisgitado = document.querySelector('#nome').value;
    const paragrafo = document.querySelector('#mensagem');
    const mensagem = `Olá ${nomeDisgitado}`;

    paragrafo.innerHTML = mensagem;
}