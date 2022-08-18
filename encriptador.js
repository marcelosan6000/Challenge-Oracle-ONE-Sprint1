function encriptarDesencriptar(elemento) {
	var entradaTexto = document.getElementById("mensaje");
	var texto = entradaTexto.value;
	var idElemento = elemento.srcElement.attributes.id.value;

	if(texto == "") {
		alert("Debe ingresar un texto!");
	}
	else {
		if(idElemento == "btn-encriptar") {
			for(var i = 0; i < textoOriginal.length; i++) {
				texto = texto.replaceAll(textoOriginal[i], claveEncriptar[i]);
			}
		}
		else {
			for(var i = 0; i < textoOriginal.length; i++) {
				texto = texto.replaceAll(claveEncriptar[i], textoOriginal[i]);
			}
		}

		document.getElementById("salida-texto-encriptado").innerHTML = texto;			
		document.getElementById("salida-texto-encriptado").style.display = "grid";
		document.getElementById("div-btn-copiar").style.display = "grid";
		document.getElementById("div-imagen").style.display = "none"; 

	}		
}

function copiarTextArea() {

	var contenido = document.getElementById("salida-texto-encriptado").innerHTML;		
    navigator.clipboard.writeText(contenido);
    
}

var textoOriginal = ["e", "i", "a", "o", "u"];
var claveEncriptar = ["enter",  "imes", "ai", "ober", "ufat"];

var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnCopiar = document.getElementById("btn-copiar");

document.getElementById("salida-texto-encriptado").style.display = "none";
document.getElementById("div-btn-copiar").style.display = "none";
btnEncriptar.onclick=encriptarDesencriptar;	
btnDesencriptar.onclick=encriptarDesencriptar;
btnCopiar.onclick=copiarTextArea;