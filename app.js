function pesquisar() {
 
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa) {
      section.innerHTML = "<p class='erro-busca'>Digite algo para buscar...</p>"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let link = "";
  let panela = "";
  let tags = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    link = dado.link.toLowerCase()
    panela = dado.panela.toLowerCase()
    tags = dado.tags.toLowerCase()
  
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa) || panela.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <p>Prato feito na: ${dado.panela}</p>
        <a href="${dado.link}" target="_blank">Saiba mais sobre o prato</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p class='erro-busca'>Nenhuma receita encontrada</p>"
  }

  section.innerHTML = resultados;
}

function random() {
  let dados = getDados();
  let indiceAleatorio = Math.floor(Math.random() * dados.length);
  let itemSorte = dados[indiceAleatorio];
  let section = document.getElementById("resultados-pesquisa");
  section.innerHTML = `
  <div class="item-resultado">
        <h2>
          <a href="${itemSorte.link}" target="_blank">${itemSorte.titulo}</a>
        </h2>
        <p class="descricao-meta">${itemSorte.descricao}</p>
        <p>Prato feito na: ${itemSorte.panela}</p>
        <a href="${itemSorte.link}" target="_blank">Saiba mais sobre o prato</a>
      </div>
  `;
}

function getDados() {
  return dados;
}

document.getElementById('campo-pesquisa').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') pesquisar();
});