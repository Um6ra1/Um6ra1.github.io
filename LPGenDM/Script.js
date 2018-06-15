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

	var phi = 1.61803398875;	// Golden ration
	var scale = Number(document.getElementById("textHeight").value);
	var thin = scale / Math.pow(phi, 8);
	c.width = scale*3/2;
	c.height = scale;
	ctx.setTransform(1, 0, 0, 1, 0, 0);	// [[a c e]; [b d f]; [0 0 1]], identity matrix
	ctx.clearRect(0, 0, c.width, c.height);
	
	// Enable shadow
	ctx.shadowOffsetX = thin/4;
	ctx.shadowOffsetY = thin/4;
	ctx.shadowBlur = thin/2;
	
	{	// Box
		var g = ctx.createLinearGradient(0, 0, 0, c.height);
		g.addColorStop(0.0, "#464241");
		g.addColorStop(0.75, "#A3A3A3");
		g.addColorStop(1.0, "#79726C");
		ctx.fillStyle = g;	
		ctx.fillRect(0, 0, c.width, c.height);
	}
	
	{	// Frame
		var w = thin;
		var g = ctx.createLinearGradient(0, 0, c.width, c.height);

		g.addColorStop(0.0, "#87671c");
		g.addColorStop(0.25, "#e0c5b2");
		g.addColorStop(0.75, "#9f895a");
		g.addColorStop(1.0, "#bca988");
		ctx.strokeStyle = g;
		ctx.lineWidth = w;
		ctx.strokeRect(w + w/2, w + w/2, c.width-3*w, c.height-3*w);
	}
	
	{	// Text
		var size = scale / Math.pow(phi, Math.exp(1));
		var cx = scale*Math.pow(1-1/phi, 2)/phi;
		var cy = cx + size;
		var vskip =  scale*Math.pow(1-1/phi, 2);
		var font = "px 'MS PMincho'";
		
		{ // Line 1
			var s = size;
			const isItalic = document.getElementById("isItalic1").checked;
			TextGrad(ctx, 0, cy-s, 0, cy);
			
			ctx.font = (isItalic ? "Italic " : "") + s + font;
			//ctx.font = "Italic " + size + "px 'Times New Roman'";
			ctx.shadowColor = "#000000";
			ctx.fillText(document.getElementById("text1").value, cx, cy);
			cy += s;
		}
		cy += vskip;
		{ // Line 2
			var s = size* phi;
			const isItalic = document.getElementById("isItalic2").checked;
			TextGrad(ctx, 0, cy-s, 0, cy);
			ctx.font = (isItalic ? "Italic " : "") + s + font;
			ctx.fillText(document.getElementById("text2").value, cx, cy);
			//ctx.shadowOffsetX = 0;	// restore
			//ctx.shadowOffsetY = 0;
			//ctx.shadowBlur = 0;
		}
	}
}

function TextGrad(ctx, x1, y1, x2, y2) {
	var g = ctx.createLinearGradient(x1, y1, x2, y2);
	g.addColorStop(0.0, "#4E260C");
	g.addColorStop(0.75, "#F7DFC3");
	g.addColorStop(1.0, "#764e34");
	ctx.fillStyle = g;
}


window.onload = () => {
	Redraw();
}

