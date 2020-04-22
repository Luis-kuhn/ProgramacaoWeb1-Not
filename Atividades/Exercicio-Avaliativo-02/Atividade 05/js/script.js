function recarrega() {

	numero1 = Number(document.getElementById("number1").value);
	numero2 = Number(document.getElementById("number2").value);
	numero3 = Number(document.getElementById("number3").value);

	resposta = numero1 + numero2 + numero3;

	if ((resposta % 2) == 0) {

		resposta += " é par"

	} else {

		resposta += " é ímpar"

	}

	alert(resposta);
  
}