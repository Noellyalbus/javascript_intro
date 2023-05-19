function startTimer(){
	const timer = parseInt(document.getElementById("iptTmp").value)
}

var check = null;

function startTimer() {
	if (check == null) {
		var cnt = 0;

		check = setInterval(function () {
			cnt += 1;
			document.getElementById("timerpart").innerHTML = cnt;
		}, 1000);
	}
}

function stopTimer() {
	clearInterval(check);
	check = null;
	document.getElementById("timerpart").innerHTML = '0';
}

