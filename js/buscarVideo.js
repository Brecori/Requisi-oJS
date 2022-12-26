import { api } from "./api.js";
import construirCard from "./mostraVideo.js";

async function buscarVideo(e) {
    e.preventDefault();


    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await api.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    lista.innerHTML = "";

    busca.forEach(elemento => lista.appendChild(
        construirCard(elemento.titulo,elemento.descricao,elemento.url,elemento.js)
    ))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este termo</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento))