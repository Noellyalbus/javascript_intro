function gerar(){
	const qtd = parseInt( document.getElementById("iptQtd").value);
    
	var divBox;
	for(let i=0; i<qtd; i ++){
		divBox = document.createElement("div");
		divBox.innerHTML = i;
		divBox.setAttribute("class","box");
		divBox.setAttribute("id",i);

        divBox.addEventListener("click",function() {
			this.style.backgroundColor = "red";
			alert(this.getAttribute("id"));
		});

	    document.body.appendChild(divBox);
	}
}

