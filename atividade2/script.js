// Atividade 02

// Crie um botão que, quando clicado, adiciona um novo parágrafo com um
// texto personalizado.

function adicionaParagrafo(){
    const texto = document.querySelector('#texto').value;
    const paragrafo = document.querySelector('#paragrafo');

    
    paragrafo.innerHTML += `${texto}<br>`
    
}