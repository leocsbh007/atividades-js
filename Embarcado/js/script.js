async function carregarProdutos(page = 1, itemsPerPage = 8) {
    try {
        // 1. Buscar os dados do JSON:
        const response = await fetch('atividades-js/Embarcado/json/produtos.json'); // Busca o arquivo produtos.json
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Transforma resposta em JSON
        const produtos = data.produtos; // Extrai o array de produtos

        // 2. Calcular a Paginação:
        const startIndex = (page - 1) * itemsPerPage; // Calcula o índice inicial para página
        const endIndex = startIndex + itemsPerPage; // Calcula o índice final para página
        const produtosPagina = produtos.slice(startIndex, endIndex); // Seleciona os produtos da página atual
        const totalPages = Math.ceil(produtos.length / itemsPerPage); // Calcula o número total de páginas

        // 3. Exibir os Produtos:
        exibirProdutos(produtosPagina);

        // 4. Exibir a Paginação:
        exibirPaginacao(page, totalPages);
    } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
    }
}

function exibirProdutos(produtos) {
    const produtosGrid = document.querySelector('.produtos-grid'); // Pega o elemento que vai mostrar os produtos
    produtosGrid.innerHTML = ''; // Limpa o conteúdo existente

    if (produtos.length === 0) {
         produtosGrid.innerHTML = '<p>Nenhum produto encontrado.</p>';
          return;
     }
    
    produtos.forEach(produto => {
        // Cria um elemento div produto-item
        const produtoItem = document.createElement('div');
        produtoItem.classList.add('produto-item');

         // Cria um elemento img
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = 'Produto';

         // Cria um elemento h3
        const h3 = document.createElement('h3');
        h3.textContent = produto.nome;
         // Cria um elemento p
        const p = document.createElement('p');
        p.textContent = produto.preco;

        //Adiciona os elementos ao div produto-item
        produtoItem.appendChild(img);
        produtoItem.appendChild(h3);
        produtoItem.appendChild(p);

         // Adiciona o item de produto ao container produtosGrid
        produtosGrid.appendChild(produtoItem);
    });
}

function exibirPaginacao(currentPage, totalPages) {
     const paginationContainer = document.getElementById('pagination'); // Pega o elemento que vai mostrar a paginação
     paginationContainer.innerHTML = ''; // Limpa a paginação anterior

     // Se totalPages for menor que 2, não mostra a paginação
      if (totalPages < 2) {
        return;
      }

      // Cria os links para cada página
      for (let i = 1; i <= totalPages; i++) {
           const link = document.createElement('a'); // Cria o elemento link
           link.href = '#';  // link nao faz nada
           link.textContent = i; // Texto que aparece no link é o numero da página

           if (i === currentPage) { // Caso o link seja o da página atual, coloca o css active
               link.classList.add('active');
           }

          //Adiciona evento para carregar a página selecionada
          link.addEventListener('click', () => {
             carregarProdutos(i)
        });
          //adiciona o link ao container de paginação
          paginationContainer.appendChild(link);
      }
}

// Carrega os produtos para a página inicial
carregarProdutos();
