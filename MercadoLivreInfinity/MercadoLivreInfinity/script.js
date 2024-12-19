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


async function carregaProdutos(){
  const url = 'https://6748c2725801f51535921487.mockapi.io/api/produtos';
  const resposta = await fetch(url);
  const dadosProdutos = await resposta.json();
  const mainGradeProdutos = document.querySelector('#grade-itens');

  dadosProdutos.forEach(infoProduto => {
    const estruturaHtmlProduto = `
    <section class="cartao-item">
        <img src="${infoProduto.imagem}" alt="" />
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
  const resposta = fetch(url,{
    method: 'DELETE'
  });

  console.log(id);

  if(!(await resposta).ok){

    throw new Error('Erro ao excluir o Produto');
  }
  alert('Produto Excluido com Sucesso!!!');
}


carregaProdutos();
  