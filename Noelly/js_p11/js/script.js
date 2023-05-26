var check = null;
// Inicia o temporizador
function startTimer(){
	const timer = parseInt(document.getElementById("iptTmp").innerHTML)

	if (check == null) {

		check = setInterval(function () {
			cnt -= 1;
			document.getElementById("timerpart").innerHTML = cnt;
		}, 1000);
	}
}

//Para o temporizador
function stopTimer() {
	clearInterval(check);
	check = null;
	document.getElementById("timerpart").innerHTML = '0';
}

//Reiniciar o temporizador
function resTimer(){
	
}
