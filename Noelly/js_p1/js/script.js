function escrever(){
	//alert("Hello world!")
    var iptmsg = document.getElementById("iptmsg");
	var msg = iptmsg.value;

	var spn = document.querySelector("#spnMsg");

	spnMsg.style.color="black";

	spn.textContent = msg;
}

function apagar(){
	var spn = document.querySelector("#spnMsg");

	spn.innerHTML = " ";
}

function vermelho(){
	var spn = document.getElementById("spnMsg");
    spnMsg.style.color="red";
}

