document.addEventListener('DOMContentLoaded', function() {
    let contador = localStorage.getItem('acessos') || 0;
    contador++;
    localStorage.setItem('acessos', contador);
    document.getElementById('numero-acessos').textContent = contador;
});