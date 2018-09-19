// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var idbttrigonoetria = document.getElementById('idbttrigonoetria');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
idbttrigonoetria.addEventListener('click', openquetrigonometri);
// Listen for close click
closeBtn.addEventListener('click', closequetrigonometri);
// Listen for outside click

function habaandroid(sthabla){
window.Android.showToast("hablaandroid",sthabla,"");

}
// Function to open modal
function openquetrigonometri(){
  modal.style.display = 'block';
}

// Function to close modal
function closequetrigonometri(){
  modal.style.display = 'none';
}
var vquestrigonometr="";
function queestrigonometria(){
	vquestrigonometr=document.getElementById("idpqueestrig").innerHTML;

	//alert(vquestrigonometr);
habaandroid(vquestrigonometr);
//	window.Android.showToast("hablaandroid",vquestrigonometr,"");
}







// Get modal element
var mdangulo = document.getElementById('midangulo');
// Get open modal button
var btangulo = document.getElementById('idbtangulo');
// Get close button
var btcloseangulo = document.getElementById("idbtcloseangulo");

// Listen for open click
btangulo.addEventListener('click', openangulo);
// Listen for close click
btcloseangulo.addEventListener('click', closeangulo);
// Listen for outside click


// Function to open modal
function openangulo(){
  mdangulo.style.display = 'block';
}

// Function to close modal
function closeangulo(){
 mdangulo.style.display = 'none';
}
var vsangulo="";
function hangulo(){
	vsangulo=document.getElementById("idpangulo").innerHTML+document.getElementById("idpangulo2").innerHTML;

	alert(vsangulo);
habaandroid(vsangulo);
	//window.Android.showToast("hablaandroid",vsangulo,"");
}




// Get modal element
var mmdangulo = document.getElementById("midmangulo");
// Get open modal button
var btmangulo = document.getElementById("idbtmangulo");
// Get close button
var btclosemangulo = document.getElementById("idbtclosemedicionangul");

// Listen for open click
btmangulo.addEventListener('click', openmngulo);
// Listen for close click
btclosemangulo.addEventListener('click', closemangulo);
// Listen for outside click


// Function to open modal
function openmngulo(){
  mmdangulo.style.display = 'block';
}

// Function to close modal
function closemangulo(){
 mmdangulo.style.display = 'none';
}
var vsangulo="";
function hmangulo(){
	vsangulo=document.getElementById("idpmangulo").innerHTML+document.getElementById("idpmangulo1").innerHTML;

	alert(vsangulo);
habaandroid(vsangulo);
	//window.Android.showToast("hablaandroid",vsangulo,"");
}












