// Função para abrir o formulário
function abrirFormulario() {
    document.getElementById("modalCadastroProduto").style.display = "block";    
  }
  
// Função para fechar o formulário
function fecharFormulario() {
  document.getElementById("modalCadastroProduto").style.display = "none";
}
  
// Fechar o modal se o usuário clicar fora da caixa de conteúdo
window.onclick = function (evento) {
  if (evento.target == document.getElementById("modalCadastroProduto")) {    
    fecharFormulario();
  }
};



const inputBarraPesquisar = document.querySelector('#pesquisar');
inputBarraPesquisar.addEventListener('input', (evento) => {
  const produtoDigitado = inputBarraPesquisar.value
  carregaProdutos(produtoDigitado)
});

async function carregaProdutos(filtro=''){
  const url = 'https://6748c2725801f51535921487.mockapi.io/api/produtos';
  const resposta = await fetch(url);
  const dadosProdutos = await resposta.json();  

  const produtosFiltrados = dadosProdutos.filter(produto => produto.nome.includes(filtro));
  
  const mainGradeProdutos = document.querySelector('#grade-itens');
  produtosFiltrados.forEach(infoProduto => {
    const estruturaHtmlProduto = `
    <section class="cartao-item">
        <img src="${infoProduto.imagem}" alt="" height="100" width="100"/>
        <h3>${infoProduto.nome}</h3>
        <p class="preco-item">R$ ${infoProduto.preco}</p>
        <button class="botao-comprar">Comprar</button><br><br>
        <button class="botao-adicionar-produto" onclick="excluirProduto('${infoProduto.id}')">Excluir Produto</button>
      </section>
    `
    mainGradeProdutos.innerHTML += estruturaHtmlProduto;
  });
}

async function excluirProduto(id){
  const url = `https://6748c2725801f51535921487.mockapi.io/api/produtos/${id}`;
  const resposta = await fetch(url,{
    method: 'DELETE'
  });

  console.log(resposta);

  if(!(await resposta).ok){

    throw new Error('Erro ao excluir o Produto');
  }
  alert('Produto Excluido com Sucesso!!!');
}


async function cadastrarProdutos() {
  try {   
    const nomeProduto = document.getElementById('nomeProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;
    const imagemProduto = document.getElementById('imagemProduto').value;

    if (!nomeProduto || !precoProduto || !imagemProduto){
      throw new Error('Preencha todo os campaos');      
    }
    const produto = {
      nome : nomeProduto,
      preco : precoProduto,
      imagem : imagemProduto
    };
    
    const url = 'https://6748c2725801f51535921487.mockapi.io/api/produtos';

    const resposta = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)  
    });
    if (!resposta.ok){
      throw new Error('Problema para assessar o Servidor', resposta.statusText);
      
    }

    alert('Produto Adicionado com Sucesso!');    
    location.reload(true);
    fecharFormulario();  
  }
  catch (erro){
    console.error('Erro ao cadastrar o produto', erro.message);
    
  }
}


carregaProdutos();
  
