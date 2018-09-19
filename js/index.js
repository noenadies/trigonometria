// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openquetrigonometri);
// Listen for close click
closeBtn.addEventListener('click', closequetrigonometri);
// Listen for outside click


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

	window.Android.showToast("hablaandroid",vquestrigonometr,"");
}









fdefineangulo()

function fdefineangulo(){
	vquestrigonometr=document.getElementById("iddefineangulo").innerHTML;

	alert(vquestrigonometr);

	window.Android.showToast("hablaandroid",vquestrigonometr,"");
}
