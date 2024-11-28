const livros = [
    {
        "titulo" : "Engenharia de Software Moderna",
        "autor" : "Marco Tulio Valente",
        "anoPublicacao" : "2022",
        "capa" : "https://engsoftmoderna.info/figs/capa/capa-3d-principal.jpg"
    },

    {
        "titulo" : "Começando a Programar em C Para Leigos",
        "autor" : "Dan Gookin",
        "anoPublicacao" : "2016",
        "capa" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMShz9Q6QIqTvtYmjvMjUdMLEQwhE2EP9Q2A&s"
   },

   {
            "titulo" : "Começando a Programar em Python Para Leigos",
            "autor" : "John Paul Mueller",
            "anoPublicacao" : "2020",
            "capa" : "https://m.media-amazon.com/images/I/614w9NOuKqL._AC_UF1000,1000_QL80_.jpg"
   },
]

function carregarLivros(){
    const divBiblioteca = document.querySelector('#biblioteca')
    divBiblioteca.innerHTML = '';

    livros.forEach(livro => {
        const estruturaHtmlLivro = `
        <h2>${livro.titulo}</h2>
        <ul>
            <li>Autor: ${livro.autor}</li>
            <li>Ano de Publicação: ${livro.anoPublicacao}</li>                                
        </ul>
        <img src="${livro.capa}" alt="" height="350" width="300">
        <hr>
        `
        divBiblioteca.innerHTML += estruturaHtmlLivro;
    })
}

carregarLivros();