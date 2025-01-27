// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    mostrarLista();
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaAmigosUL = document.getElementById("listaAmigos");
    listaAmigosUL.innerHTML = ""; // Limpiar contenido existente

    listaDeAmigos.forEach((amigo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${amigo}`;
        listaAmigosUL.appendChild(listItem);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultadoUL = document.getElementById("resultado");
    resultadoUL.innerHTML = ""; // Limpiar resultado anterior

    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de realizar el sorteo.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoGanador = listaDeAmigos[indiceGanador];

    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `🎉 El amigo secreto es: ${amigoGanador} 🎉`;
    resultadoUL.appendChild(resultadoItem);
}
