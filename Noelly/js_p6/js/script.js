const btn = document.getElementById("btn");
btn.addEventListener("click",runAction);
let action = "Calcular"
btn.innerHTML = "Calcular";

function action(){
    
}

function calcular(){
	const x = parseInt(document.getElementById("iptX").value);
	const y = parseInt(document.getElementById("iptY").value);

	var txt = "";

	if (x >= y){
		txt = "Faixa de valores inválida";
	}

	var c ="";
    let k = x;
    while(k <= y){
        if (k % 2 ==0){
            c = "par";
        }else{
            c = "impar";
        }
        txt += "<span class='"+c+"'>" + k + "</span> "; // txt = txt + " " + k;
        k++;
    }

// 	for (i = x; i <= y; i++){
//        if (i % 2 == 0){
// 		c = "par";
// 	  }
// 	  else{
// 		c = "impar";
// 	  }

// 	  txt += "<span class='"+ c +"'>" + i + "</span>";
     //}

     console.log(txt);
 	 document.getElementById("spnRes").innerHTML = txt;

     const btn = document.getElementById("btn");
     btn.removeEventListener("click",calcular);
     btn.addEventListener("click",limpar)
     btn.innerHTML = "Limpar";

	  /******** Exemplos de laços infinitos  ***********/
    // {
    //     let k=0;    
    //     while(true){
    //         console.log(k++);
    //     }
    // } 
    
    // {
    //     for(let k=0;;k++){
    //         console.log(k);
    //     }
    // }

    // {
    //     for(;;){
    //         console.log("oi");
    //     }
    // }
    /******************************************/
 }

function limpar(){
	var spn = document.getElementById("iptX").value = document.getElementById("iptY").value = document.getElementById("spnRes").innerHTML = " ";
}

function verificarX(){
    const iptX = document.getElementById("iptX");
    const x = iptX.value;   
    // document.getElementById("spnRes").innerHTML = x;
    const spnCondNum = document.querySelector("#spnCondNumX");

    spnCondNum.textContent = "";
    if (x % 2 == 0){
        iptX.className = "iptPar";
        spnCondNum.textContent += " PAR ";
    }else {
        iptX.className = "iptImpar";
        spnCondNum.textContent += " IMPAR ";

    action = calcular;
    btn.innerHTML = "Calcular";
    }
}


function verificarY(){
    const iptY = document.getElementById("iptY");
    const y = iptY.value;   
    const spnCondNum = document.querySelector("#spnCondNumY");

    spnCondNum.textContent = "";
    if (y % 2 == 0){
        iptY.className = " iptPar ";
        spnCondNum.textContent += " PAR ";
    }else {
        iptY.className = " iptImpar ";
        spnCondNum.textContent += " IMPAR ";
    }
}