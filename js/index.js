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
var vsmangulo="";
function hmangulo(){
	vsmangulo=document.getElementById("idpmangulo").innerHTML+document.getElementById("idpmangulo1").innerHTML
	+document.getElementById("idpmangulo2").innerHTML;

	alert(vsmangulo);
habaandroid(vsmangulo);
	//window.Android.showToast("hablaandroid",vsangulo,"");
}

var vvalorangulo=0;
function valoresangulos(){
vvalorangulo=document.getElementById("identraangulo").value;
if(document.getElementById("cradianes").checked){
	vvalorangulo=vvalorangulo*Math.PI/180;

	document.getElementById("idpresulangulo").innerHTML="Conversión a radianes: "+vvalorangulo;


}if(document.getElementById("cgrados").checked){
vvalorangulo=vvalorangulo/Math.PI*180;
document.getElementById("idpresulangulo").innerHTML="Conversión a grados: "+vvalorangulo;
}

}




// Get modal element
var ladangulo = document.getElementById("midlaangulo");
// Get open modal button
var btlaangulo = document.getElementById("idbtlaangulo");
// Get close button
var btcloselaangulo = document.getElementById("idbtcloselaangulo");

// Listen for open click
btlaangulo.addEventListener('click', openlangulo);
// Listen for close click
btcloselaangulo.addEventListener('click', closelaangulo);
// Listen for outside click


// Function to open modal
function openlangulo(){
  ladangulo.style.display = 'block';
}

// Function to close modal
function closelaangulo(){
 ladangulo.style.display = 'none';
}
var vslaar="";
function hmangulo(){
	vslaar=document.getElementById("idplaangulo").innerHTML;

	alert(vslaar);
habaandroid(vslaar);
	//window.Android.showToast("hablaandroid",vsangulo,"");
}

var vvss="";
var vvtt="";
var vvrd="";
function valoresangulos(){
vvtt=document.getElementById("idtt").value;
vvss=document.getElementById("idss").value;
vvrd=document.getElementById("idrd").value;
if(vvss!="" && vvtt !="" && vvrd ==""){
	alert(1);
	vvrd=vvss/vvtt;
	document.getElementById("idrearco").innerHTML="El radio : "+vvrd+" unidades";
}

if(vvss!="" && vvtt =="" && vvrd !==""){
	alert(2);
	vvtt=vvss/vvrd;
	document.getElementById("idrearco").innerHTML="El angulo : "+vvtt+" radianes";
}

if(vvss=="" && vvtt !="" && vvrd !==""){
	vvss=vvtt*vvrd;
	document.getElementById("idrearco").innerHTML="El arco : "+vvss+" unidades";
}

if(document.getElementById("cang").checked){
vvalangar=vvalangar/Math.PI;
document.getElementById("idrearco").innerHTML="Conversión a grados: "+vvalorangulo;
}

}





