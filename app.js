function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
	let section = document.getElementById("resultados-pesquisa");
    
	// Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value
	
	// Verifica se o usuário digitou algo no campo de pesquisa
    if (!campoPesquisa) {
		// Se nada foi digitado, exibe uma mensagem informando que é necessário digitar algo
        section.innerHTML = "<p>Você precisa digitar algo, para obter uma busca!!</p>"
        return; // Interrompe a função
    }
	
	// Converte o termo de pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase()
	
	// Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
	
	// Itera sobre cada item da lista de dados
    for (let dado of dados){
		// Converte o título, sinopse e tags do item para minúsculas para facilitar a comparação
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLowerCase()
		
		// Verifica se o termo de pesquisa está presente no título, sinopse ou tags do item
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se o termo de pesquisa foi encontrado, cria um elemento HTML para exibir o resultado da pesquisa
			resultados += `
            <div class="item-resultado">
                <h3>
                    ${dado.titulo}    
                </h3>
                <div class="detalhes">
                <div><strong>Autor(es): </strong><a href="${dado.link1}" target="_blank">${dado.autores}</a></div>
                <div><strong>Gênero:</strong> ${dado.genero}</div>
                <div><strong>Lançamento:</strong> ${dado.lancamento}</div>
            </div>
                <p class="descricao-meta"><strong>Sinopse:</strong> ${dado.sinopse}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }

        
    }
	
	// Verifica se algum resultado foi encontrado
    if (!resultados){
		// Se nenhum resultado foi encontrado, exibe uma mensagem informando que não há resultados
        resultados = "<p>Nada foi encontrado!!</p>"

    }
	
	// Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados

}
