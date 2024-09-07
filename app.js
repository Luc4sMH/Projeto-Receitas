function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
      // Cria o HTML para cada resultado, incluindo título, descrição, panela e links
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
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }