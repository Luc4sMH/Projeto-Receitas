function pesquisar() {
 
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa) {
      section.innerHTML = "Digite algo para buscar..."
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
    resultados = "<p>Nenhuma receita encontrada</p>"
  }

  section.innerHTML = resultados;
}

// teste de commit