let prevdis = scrollDis();

function scrollDis() {
	let dis;
	if (window.pageYOffset) {
		dis = window.pageYOffset;
	} else if (document.compatMode && document.compatMode != 'BackCompat') {
		dis = document.documentElement.scrollTop;
	} else if (document.body) {
		dis = document.body.scrollTop;
	}
	return dis;
}

function throttle(fn, delay) {
	var timer;
	return function() {
		var _this = this;
		var args = arguments;
		if (timer) {
			return;
		}
		timer = setTimeout(function() {
			fn.apply(_this, args);
			timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
		}, delay)
	}
}

function autoScroll() {
	let dis = scrollDis();
	if (dis > 0 && dis < screen.width) {
		if (dis < prevdis) {
			console.log(1);
			window.scrollTo(0,0);
		} else {

		}
	}
	prevdis = dis;
}

let throttleScroll = throttle(autoScroll, 1000);

window.onscroll = function(event) {
	throttleScroll(event, 'throttle');
}
