function Save() {
	var c = document.getElementById("canvas");
	var a = document.createElement("a");
	a.href = c.toDataURL("image/png");
	a.setAttribute("download", "lp.png");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function UpdateText() {
	var textSrc = document.getElementById("textSrc");
	var tags4Pixiv = document.getElementById("tags4Pixiv");
	var tags4Nico = document.getElementById("tags4Nico");
	var categoryNico = "艦これ";
	var categoryPixiv = "艦隊これくしょん";
		
//	if(textSrc.value != "") {
		tags4Nico.value = textSrc.value
		+ " "
		+ textSrc.value + "(" + categoryNico + ")";
		
		tags4Pixiv.value = textSrc.value
		+ " "
		+ textSrc.value + "(" + categoryPixiv + ")";
//	}
}

function CopyText() {
	var e = event.target.id; // Just clicked 
	var textbox = document.getElementById(e);
	
	textbox.select();
	
	document.execCommand("copy");
}


window.onload = () => {
	Redraw();
}

