let contador = 0;
document.getElementById("incrementarBtn").addEventListener("click", function() {
    contador++;
    atualizarContador();
});

document.getElementById("zerarBtn").addEventListener("click", function() {
    contador = 0;
    atualizarContador();
});

function atualizarContador() {
    document.getElementById("contadorParagrafo").textContent = `O contador está com ${contador} cliques`;
}