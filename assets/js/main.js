const titulo = document?.querySelector('#titulo');
const btn_mostrar = document?.querySelector('#mostrar_titulo');

const mostrar_mensaje = (mensaje) => {
    titulo.innerHTML = mensaje;
}

btn_mostrar.addEventListener('click', mostrar_mensaje("Hola, este es el Header 1"));