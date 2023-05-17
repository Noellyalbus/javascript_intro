function gerar(){
	const x = parseInt( document.getElementById("iptx").value);
    
	var ipt;
	for(let i=0; i<qtd; i ++){
		ipt = document.createElement("input");
		ipt.innerHTML = i;
		ipt.setAttribute("class","box");
		ipt.setAttribute("id",i);

	    document.body.appendChild(ipt);
	}
}

function unir(){
	let value = document.getElementById("iptx").value;
	
}