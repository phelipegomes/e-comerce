function some(x, y) {
    return console.log(x + y);
}

// Animacao para escrita na tela
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

function test() {
    return console.log("alouuuuuuuuuuu");
}