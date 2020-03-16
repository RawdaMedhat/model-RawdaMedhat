//get the model
var modal = document.getElementById('the-model');
var img = document.getElementById('the-img');
//get the content of the model
var modelImg = document.getElementById('img'),
	modelCaption = document.getElementById('caption');
img.onclick =function() {
	// body...
	modal.style.display = "block";
	modelImg.src = this.src;
	modelCaption.innerHTML = this.alt;
}
//get the close btn 
var close = document.getElementsByClassName('close')[0];
//when click on close hide the momel
close.onclick = function(){
	modal.style.display = "none";
	
}	
//when click on esc hide the model
document.onkeydown = function(ev){
	if (ev.keyCode == "27") {
		modal.style.display = "none";

	}
}