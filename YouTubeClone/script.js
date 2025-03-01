const url = 'https://67c22fb861d8935867e59cc6.mockapi.io/videos';

function resetForm() {
    document.getElementById('videoForm').reset();
    document.getElementById('videoId').value = '';
}

async function getVideos(filtro='') {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        alert('Erro ao carregar vídeos.', response.statusText);
        throw new Error(`Erro ao carregar vídeos: ${response.statusText}`);
        }
        const dadosVideos = await response.json();
        const videosFiltrados = dadosVideos.filter(video => {
            const titulo = video.title || '';
            return titulo.toLowerCase().includes(filtro.toLowerCase());
        });

        const mainGradeVideos = document.querySelector('#videoGrid');
        mainGradeVideos.innerHTML = '';
                
        videosFiltrados.forEach(infoVideo => {
            const estruturaHtmlVideo = `
            <div class="video-card">
                <img src="${infoVideo.thumbnail}" alt="Thumbnail do vídeo" class="thumbnail" />
                <h3 class="video-title">${infoVideo.title}</h3>
                <p class="channel-name">${infoVideo.channel}</p>
                <p class="video-stats">${infoVideo.views} • ${infoVideo.time}</p>
                <button onclick="editVideo(${infoVideo.id})">Editar</button>
                <button onclick="deleteVideo(${infoVideo.id})">Deletar</button>
            </div>
            `;
            mainGradeVideos.innerHTML += estruturaHtmlVideo;
        });
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao carregar os vídeos.');
    }
}

document.querySelector('.search-bar input').addEventListener('input', function(event) {
    const filtro = event.target.value;
    getVideos(filtro);
});

async function submitVideo() {  
  const title = prompt("Digite o título do vídeo:");
  const channel = prompt("Digite o nome do canal:");
  const views = prompt("Digite o número de visualizações:");
  const time = prompt("Digite o tempo (ex: há 1 semana):");
  const thumbnail = prompt("Digite a URL da thumbnail:");
  
  if (!title || !channel || !views || !time || !thumbnail) {
    alert("Todos os campos são obrigatórios!");
    return;
  }

  const videoData = {
    title,
    channel,
    views,
    time,
    thumbnail
  };
  
  alert(`Título: ${videoData.title}\n
    Canal: ${videoData.channel}\n
    Visualizações: ${videoData.views}\n
    Tempo: ${videoData.time}\n
    Thumbnail: ${videoData.thumbnail}`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(videoData)
    });

    const data = await response.json();
     console.log('Vídeo adicionado:', data);
    alert('Video adicionado com sucesso!');
    getVideos();
  } catch (error) {
    console.error('Erro ao adicionar vídeo:', error);
    alert('Ocorreu um erro ao adicionar o vídeo.');
  }
}

async function editVideo(videoId) {
    try {      
      const response = await fetch(`${url}/${videoId}`);
      if (!response.ok) {
        alert('Vídeo não encontrado.', response.statusText);
        throw new Error(`Erro ao carregar vídeo: ${response.statusText}`);
      }
      const video = await response.json();  
      
      const title = prompt("Digite o título do vídeo:", video.title);
      const channel = prompt("Digite o nome do canal:", video.channel);
      const views = prompt("Digite o número de visualizações:", video.views);
      const time = prompt("Digite o tempo (ex: há 1 semana):", video.time);
      const thumbnail = prompt("Digite a URL da thumbnail:", video.thumbnail);
  
      if (!title || !channel || !views || !time || !thumbnail) {
        alert("Todos os campos são obrigatórios!");
        return;
      }
  
      const videoData = {
        title,
        channel,
        views,
        time,
        thumbnail
      };
  
      alert(`Título: ${videoData.title}\nCanal: ${videoData.channel}\nVisualizações: ${videoData.views}\nTempo: ${videoData.time}\nThumbnail: ${videoData.thumbnail}`);
        
      const updateResponse = await fetch(`${url}/${videoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(videoData)
      });
  
      const updatedVideo = await updateResponse.json();
      console.log('Vídeo atualizado:', updatedVideo);
      alert('Vídeo atualizado com sucesso!');
      getVideos();
    } catch (error) {
      console.error('Erro ao editar vídeo:', error);
      alert('Ocorreu um erro ao editar o vídeo.');
    }
  }


async function deleteVideo(videoId) {
    if (confirm('Tem certeza que deseja deletar este vídeo?')) {
      try {
        const response = await fetch(`${url}/${videoId}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        console.log('Vídeo deletado:', data);
        console.log('Vídeo deletado com sucesso!');
        getVideos();
      } catch (error) {
        console.error('Erro ao deletar vídeo:', error);
        alert('Ocorreu um erro ao deletar o vídeo.');
      }
    }
  }

getVideos();
  