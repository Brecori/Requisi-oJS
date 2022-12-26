import { api } from "./api.js";

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(e) {
    e.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
try {

    await api.criaVideo(titulo, descricao, url, imagem);
    
    window.location.href = "../pages/envio-concluido.html";
} catch (e) {
    alert(e);
}

}


formulario.addEventListener("submit", evento => criarVideo(evento));