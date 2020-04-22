class Filme {

    constructor(titulo, ano, genero) {

      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;

    }

}

function recarrega() {

	var biblio = document.getElementById('biblioteca');

	filme1 = new Filme("Star Wars: Episódio IX", 2019, "Ficção");

	filme2 = new Filme("O Chamado", 2003, "Terror");

	filme3 = new Filme("O Poço", 2020, "Suspense");

	arrayList = new Array (filme1, filme2, filme3);
  
	for( i = arrayList.length - 1; 0 <= i; i-- ) {

		var div = document.createElement('div');
		div.setAttribute('class', 'movie');
		
		// insere o título
		var p = document.createElement('p');
		p.innerText = "Título: " + arrayList[i].titulo
		div.appendChild(p);

		// insere o ano
		var p = document.createElement('p');
		p.innerText = "Ano: " + arrayList[i].ano
		div.appendChild(p);

		// insere o genero
		var p = document.createElement('p');
		p.innerText = "Gênero: " + arrayList[i].genero
		div.appendChild(p);

		biblio.appendChild(div);

	}
  
}
