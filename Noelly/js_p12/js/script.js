function gravar(){
	const txt = document.getElementById("iptText").value;
	// alert(txt);
	
     localStorage.setItem('textoUser',txt);
	//  alert(localStorage.getItem('textoUser'));

	 document.getElementById("spnTxt").innerHTML = txt;
}	

if (!localStorage.getItem('textoUser')){

	document.getElementById("spnTxt").innerHTML = "";
	localStorage.setItem('textoUser',"");
	// alert("Seja Bem-vindo");
}else{
    const txt = localStorage.getItem('textoUser');

    document.getElementById("iptText").value = txt;
    document.getElementById("spnTxt").innerHTML = txt;
}

function limpar(){

	localStorage.clear();

	document.getElementById("iptText").value = "";
	document.getElementById("spnTxt").innerHTML = "";

}



