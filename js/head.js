let headBack = document.getElementById('profile');
let x = -1,y = -1;
let len = document.styleSheets[0].rules.length;
document.styleSheets[0].addRule('#profile::before','background-position-x: center')
headBack.onmouseenter = function(event){
    x = event.clientX;
    y = event.clientY;
}
headBack.onmousemove = function(event){
	let newX = event.clientX;
	let newY = event.clientY;
	document.styleSheets[0].removeRule(len)
	document.styleSheets[0].addRule('#profile::before','background-position-x:' + (50 - (x - newX)/50) + '%;background-position-y:' + (50 - (y - newY)/50 +"%") + '%;');
}
headBack.onmouseleave = function(event){
	headBack.style = 'transition:background-position 0.2s 0s linear; background-position: center;';
}