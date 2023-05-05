function calcular(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var operacao = document.getElementById("operacao").value;
	var resultado;

	if (operacao == "+"){
		resultado= num1+num2;
	}
	else if (operacao =="-"){
		resultado = num1 - num2;
	}
	else if (operacao == "*"){
		resultado = num1 * num2;
	}
	else if (operacao == "/"){
        resultado = num1 / num2;
	}
	else if (operacao =="==="){
		resultado = num1 / num2;
	}

	document.getElementById("resultado").innerHTML = resultado;
}
