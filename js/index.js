window.onload = function() {
	var phase = document.getElementById("phase1");
	phase.addEventListener('mouseover', function(e) {
		if (e.target.className == "task") {
			console.log("mouseover");
			e.target.style.backgroundColor = "rgb(32, 64, 86)";
		}else if (e.target.parentNode.className == "task") {
			e.target.parentNode.style.backgroundColor = "rgb(32, 64, 86)";
		}
	},true);
	phase.addEventListener('mouseout', function(e) {
		if (e.target.className == "task") {
			console.log("mouseout");
			e.target.style.backgroundColor = "white";
		}else if (e.target.parentNode.className == "task") {
			e.target.parentNode.style.backgroundColor = "white";
		}
	});
}