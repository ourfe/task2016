// 无需js便能实现基本效果
// window.onload = function() {
// 	var phase = document.getElementById("phase1");
// 	// 跨浏览器处理函数
// 	var EventUtil = {
// 		addHandler: function(element, type, handler) {
// 			if (element.addEventListener) {
// 				element.addEventListener(type, handler, false);
// 			}else if (element.attachEvent) {
// 				element.attachEvent("on" + type, handler);
// 			}else {
// 				element["on" + type] = handler;
// 			}
// 		},
// 		removeHandler: function(element, type, handler) {
// 			if (element.removeEventListener) {
// 				element.removeEventListener(type, handler);
// 			}else if (element.detachEvent) {
// 				element.detachEvent("on" + type, handler);
// 			}else {
// 				element["on" + type] = null;
// 			}
// 		}
// 	};
// 	// 兼容IE
// 	function getSrcElement(event) {
// 		return event.target || event.srcElement;
// 	}

// 	EventUtil.addHandler(phase, 'mouseover', function(e) {
// 		var target = getSrcElement(e);
// 		if (target.className == "task") {
// 			console.log("mouseover");
// 			target.style.backgroundColor = "rgb(32, 64, 86)";
// 		}else if (target.parentNode.className == "task") {
// 			console.log("mouseover parent");
// 			target.parentNode.style.backgroundColor = "rgb(32, 64, 86)";
// 		}
// 	});
// 	EventUtil.addHandler(phase, 'mouseout', function(e) {
// 		var target = getSrcElement(e);
// 		if (target.className == "task") {
// 			console.log("mouseout");
// 			target.style.backgroundColor = "white";
// 		}else if (target.parentNode.className == "task") {
// 			console.log("mouseout");
// 			target.parentNode.style.backgroundColor = "white";
// 		}
// 	});
// }