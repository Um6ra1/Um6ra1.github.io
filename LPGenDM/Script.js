function Save() {
	var c = document.getElementById("canvas");
	var a = document.createElement("a");
	a.href = c.toDataURL("image/png");
	a.setAttribute("download", "lp.png");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function Redraw() {
	const c = document.getElementById("canvas");
	const ctx = c.getContext("2d");
/*
//	const img = new Image();
	const svg = new Blob([svgData], {type: "image/svg+xml"});
	const url = URL.createObjectURL(svg);
				
	img.onload = () => { // lambda function
 		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(img, 0, 0);
		URL.revokeObjectURL(url);
	}
				
	img.crossOrigin = "Anonymous";
	img.src = url;
	*/
	//alert("w:" + c.width + " h;" + c.height);
	ctx.setTransform(1, 0, 0, 1, 0, 0);	// [[a c e]; [b d f]; [0 0 1]], identity matrix
	ctx.clearRect(0, 0, c.width, c.height);
	
	{	// Box
		var g = ctx.createLinearGradient(0, 0, 0, c.height);
		g.addColorStop(0.0, "#464241");
		g.addColorStop(0.75, "#A3A3A3");
		g.addColorStop(1.0, "#79726C");
		/*
		g.addColorStop(0.0, "#36382d");
		g.addColorStop(0.75, "#A3A3A3");
		g.addColorStop(1.0, "#79726C");
		*/
		ctx.fillStyle = g;	
		ctx.fillRect(0, 0, c.width, c.height);
	}
	
	{	// Frame
		var w = 6;
		var g = ctx.createLinearGradient(0, 0, c.width, c.height);
		/*
		g.addColorStop(0.0, "#82705A");
		g.addColorStop(0.25, "#ABA09A");
		g.addColorStop(0.75, "#84755E");
		g.addColorStop(1.0, "#ABA09A");
		*/
		g.addColorStop(0.0, "#87671c");
		g.addColorStop(0.25, "#e0c5b2");
		g.addColorStop(0.75, "#9f895a");
		g.addColorStop(1.0, "#bca988");
		ctx.strokeStyle = g;
		ctx.lineWidth = w;
		ctx.strokeRect(w + w/2, w + w/2, c.width-3*w, c.height-3*w);
	}
	
	{	// Text
		var txt1 = document.getElementById("text1");
		var txt2 = document.getElementById("text2");
		var size = 100;
		var cx = size/2;
		var cy = size*1.2;
		var vskip = size*1.4;
		var g = ctx.createLinearGradient(0, cy-size, 0, cy);
		g.addColorStop(0.0, "#4E260C");
		g.addColorStop(0.75, "#F7DFC3");
		g.addColorStop(1.0, "#764e34");
		
		ctx.fillStyle = g;
		ctx.font = "Italic " + size + "px 'Times New Roman'";
		ctx.shadowColor = "#000000";
		ctx.shadowOffsetX = 1;
		ctx.shadowOffsetY = 1;
		ctx.shadowBlur = 2;
		ctx.fillText(txt1.value, cx, cy);

		ctx.font = "Italic " + size*1.2 + "px 'Times New Roman'";
		g = ctx.createLinearGradient(0, cy-size + 1.2*size, 0, cy-size + size +1.2*size);
		g.addColorStop(0.0, "#4E260C");
		g.addColorStop(0.75, "#F7DFC3");
		g.addColorStop(1.0, "#764e34");
		ctx.fillStyle = g;
		ctx.fillText(txt2.value, cx, cy+vskip);
		ctx.shadowOffsetX = 0;	// restore
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 0;
		
	}
}

window.onload = () => {
	
}

