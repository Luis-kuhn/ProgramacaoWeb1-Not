function fatorial(){
	var valor = document.getElementById('numero').value;

	var resultado=1;
	var count=1;
  
	while(count <= valor){
	 resultado *= count;
	 count++;
	}
	
	document.getElementById('resposta').innerText = resultado;
  }


