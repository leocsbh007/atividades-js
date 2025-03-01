# YouTube Clone

## Descrição
Este projeto é uma clonagem simples da interface do YouTube, com funcionalidades para exibição, busca, adição, edição e remoção de vídeos. A interface é composta por um menu lateral com várias opções e uma grade de vídeos que pode ser filtrada e gerenciada pelos usuários.

## Funcionalidades

### 1. **Menu Lateral**
   - Menu de navegação com links para várias seções como Home, Shorts, Subscriptions, History, Playlists, Trending, Music, Movies, entre outras.
   - Ícones usando Font Awesome para cada opção de menu.
   - Não foram implementadas as ações dos botões o objetivo era consumir uma api

### 2. **Barra de Pesquisa**
   - Campo de pesquisa no topo para filtrar os vídeos exibidos na página.
   - Os vídeos podem ser filtrados por título em tempo real, conforme o usuário digita.

### 3. **Exibição de Vídeos**
   - Os vídeos são carregados dinamicamente a partir de uma API fictícia. (https://67c22fb861d8935867e59cc6.mockapi.io/videos)
   - Cada vídeo exibe informações como:
     - Título
     - Nome do canal
     - Número de visualizações
     - Tempo de publicação (ex: "há 1 semana")
     - Thumbnail (imagem de pré-visualização)

### 4. **Adicionar Vídeos**
   - Através de um botão de "Incluir Vídeo", o usuário pode adicionar um vídeo informando o título, canal, visualizações, tempo e a URL da thumbnail.
   - Dados do vídeo são validados e enviados para a API para adição ao banco de dados.

### 5. **Edição de Vídeos**
   - Cada vídeo exibido tem um botão de "Editar".
   - Ao clicar, o usuário pode atualizar as informações do vídeo, como título, canal, visualizações, tempo e thumbnail.

### 6. **Deletar Vídeos**
   - Cada vídeo exibido tem um botão de "Deletar".
   - Ao clicar, o vídeo será removido após uma confirmação do usuário.

### 7. **Notificações**
   - Um ícone de sino para notificação de novos eventos (a funcionalidade de notificações reais pode ser implementada posteriormente).

### 8. **Responsividade**
   - A interface é responsiva, adaptando-se para dispositivos com diferentes larguras de tela (desktop, tablets e smartphones).
   - O menu lateral é ocultado em telas menores, e a busca e grade de vídeos são ajustadas para caber na tela.

### 9. **Integração com API**
   - A comunicação com a API é feita via `fetch` para buscar, adicionar, editar e excluir vídeos.
   - A API utilizada para os dados dos vídeos é uma API mockada, fornecendo dados no formato JSON.

---

## Tecnologias Usadas
- HTML5
- CSS3
- JavaScript
- Font Awesome (para os ícones)
- API Mock (simulada para carregamento de vídeos)

---

## Como Usar

1. **Clonar o repositório:**
'''bash'''
git clone https://github.com/seu-usuario/youtube-clone.git


2. **Abrir o projeto no navegador:**
- Navegue até a pasta do projeto e abra o arquivo `index.html` em um navegador para visualizar a interface.

3. **Funcionalidades:**
- **Pesquisar vídeos**: Utilize o campo de pesquisa para filtrar os vídeos exibidos.
- **Adicionar, editar ou excluir vídeos**: Utilize os botões apropriados para gerenciar os vídeos.

---

## Observações

- Este é um projeto de demonstração e, atualmente, não possui backend real. Ele utiliza uma API mockada para demonstrar o funcionamento das funcionalidades.
- O design e as interações foram feitos para se assemelhar à interface do YouTube, mas sem as funcionalidades complexas do site real.

