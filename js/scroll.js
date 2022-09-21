var dis;
let prevdis = scrollDis();
let aboutme = document.getElementById('aboutme');
let isOn = false;
function scrollDis() {
	if (window.pageYOffset) {
		dis = window.pageYOffset;
	} else if (document.compatMode && document.compatMode != 'BackCompat') {
		dis = document.documentElement.scrollTop;
	} else if (document.body) {
		dis = document.body.scrollTop;
	}
}

aboutme.onmouseenter = function(event) {
	isOn = true;
}

aboutme.onmouseleave = function(event) {
	isOn = false;
}

window.onscroll = function(event) {
	scrollDis();
	
	if(dis < prevdis){
		console.log('end');
		aboutme.style.scrollSnapAlign = 'end';
	}else if(dis > prevdis){
		console.log('start');
		aboutme.style.scrollSnapAlign = 'start';
	}
	prevdis = dis;
}
