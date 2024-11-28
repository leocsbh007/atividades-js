async function carregarCardapio(){
    const url = 'https://6748c2725801f51535921487.mockapi.io/api/cardapio/';
    const resposta = await fetch(url);
    const dadosCardapio = await resposta.json();
    const sectionMenu = document.querySelector('#menu')


    dadosCardapio.forEach(infoComida => {
        const estruturaHtmlComida = `
        <div class="item">
            <img src="${infoComida.imagem}" alt="">
            <div class="details">
                <h2>${infoComida.nome}</h2>
                <p>${infoComida.descricao}</p>
                <span>R$ ${infoComida.preco}</span>
            </div>
        </div>
        `
        sectionMenu.innerHTML += estruturaHtmlComida;
    });    

}


carregarCardapio()