function boasVindas() {
    alert("Bem-vindo ao site sobre Bangkok!");
}

function mostrarTexto() {
    var texto = document.getElementById("extra");

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}

function mudarCor() {
    document.body.style.backgroundColor = "black";
}

var numero = 0;

function contador() {
    numero++;
    document.getElementById("numero").innerText = numero;