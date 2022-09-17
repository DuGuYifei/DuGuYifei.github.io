let headBack=document.getElementById('profile');
let stringX = headBack.style.backgroundPositionX;
let stringY = headBack.style.backgroundPositionY;
let x = -1,y = -1;
headBack.onmouseenter = function(event){
    x = event.clientX;
    y = event.clientY;
}
headBack.onmousemove = function(event){
	let newX = event.clientX;
	let newY = event.clientY;
	headBack.style.backgroundPositionX = 50 - (x - newX)/50 +"%";
	headBack.style.backgroundPositionY = 50 - (y - newY)/50 +"%";
}
headBack.onmouseleave = function(event){
	headBack.style = 'transition:background-position 0.2s 0s linear; background-position: center;';
}