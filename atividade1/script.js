function adicionarItem(){
    const itemDigitado = document.querySelector('#item').value;
    const novoItem = document.querySelector('#novoItem')

    novoItem.innerHTML += `<li>${itemDigitado} </li>`;
}