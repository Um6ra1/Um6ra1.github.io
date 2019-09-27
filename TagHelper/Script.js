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
	var tags4One = document.getElementById("tags4Onedro");
	
	var categoryNico = "艦これ";
	var categoryPixiv = "艦隊これくしょん";
		
//	if(textSrc.value != "") {
		tags4Nico.value = textSrc.value
		+ " "
		+ textSrc.value + "(" + categoryNico + ")";
		
		tags4Pixiv.value = textSrc.value
		+ " "
		+ textSrc.value + "(" + categoryPixiv + ")";
		
		var d = new Date();
		var y = d.getFullYear();
		var m = ("00" + (d.getMonth() + 1)).slice(-2);
		var d = ("00" + (d.getDate()  + 0)).slice(-2);
		
		tags4One.value = ""
		+ "#艦これ版深夜の真剣お絵描き60分一本勝負\r\n"
		+ "#艦これ版真剣お絵描き60分一本勝負_" + (y+m+d)
		+ "\r\n"
		+ "#" + textSrc.value;
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

