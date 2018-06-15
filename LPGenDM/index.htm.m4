divert(-1)

define(_HtmlBegin, `<html lang=ja>')
define(_HtmlEnd, `</html>')
define(_Html, `<html lang=ja>
$1
</html>')
define(_HeadBegin, `<head>')
define(_HeadEnd, `</head>')
define(_DivBegin, `<div $*>')
define(_DivEnd, `</div>')
define(_FormBegin, `<form $*>')
define(_FormEnd, `</form>')
define(_CommentBegin, `<!--')
define(_CommentEnd, `-->')
define(_BodyBegin, `<body>')
define(_BodyEnd, `</body>')
define(_BeginUList, `<ul>')
define(_EndUList, `</ul>')
define(_LItem, `<li>$1</li>')
define(_P, `<p>$1</p>')
define(_H, `<h$1>$2</h$1>')
define(_Label, `<label>$1</label>')
define(_BR, `<br>')
define(_COL, `<span style="color:$1;">$2</span>')
define(_Canvas, `<canvas id="$1" width="$2" height="$3"></canvas>')
define(_Div, `<div $1>$2</div>')
define(_Title, `<title>$1</title>') dnls
define(_PutCss, `<link rel="stylesheet" type="text/css" href="$1">') dnls
define(_PutJs, `<script type="text/javascript" src="$1"></script>') dnls
define(_PutMathjax, `<script async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_CHTML"></script>') dnls
define(_SetViewport, `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">') dnls
define(_SetChaset, `<meta charset="$1" />') dnls

define(_TITLE_NAME, `ライフポイントジェネレータDM')
define(_CONTENT, `遊戯王DMのライフポイント画像を生成します。')

divert(1) dnl

_HtmlBegin
	_HeadBegin
		_SetChaset(utf-8)
		_SetViewport()
		_PutCss(Style.css)
		_PutJs(Script.js)
		_Title(_TITLE_NAME)
		<meta name="_TITLE_NAME" content="_CONTENT">
	_HeadEnd
	
	_BodyBegin
		_DivBegin(id="HeaderBk")
			_H(1, _TITLE_NAME)
			_COL(
				white, _P(_CONTENT)
				_BeginUList
					_LItem(一行目に「ＬＰ」や「攻撃力」を入力します)
					_LItem(二行目に「数値」を入力します)
					_LItem(文字は全角、数値は半角とすると綺麗に出ます)
				_EndUList
			)
		_DivEnd
		
		_H(3, Parameters)
		_DivBegin(class="ParamRow")
			_Label(Height:)
			<input type="text" id="textHeight", size="100%" value="400" spellcheck="false" oninput="Redraw();">
		_DivEnd
		
		_DivBegin(class="ParamRow")
			_DivBegin(class="ParamCol")
				_Label(Line1:)
				<input type="text" id="text1", size="100%" value="ⅬＰ" spellcheck="false" oninput="Redraw();">
			_DivEnd
			_DivBegin(class="ParamCol")
				_Label(Italic:)
				<input type="checkbox" id="isItalic1", size="100%" checked="checked" oninput="Redraw();">
			_DivEnd
		_DivEnd
		
		_DivBegin(class="ParamRow")
			_DivBegin(class="ParamCol")
				_Label(Line2:)
				<input type="text" id="text2", size="100%" value=" 4000" spellcheck="false" oninput="Redraw();">
			_DivEnd
			_DivBegin(class="ParamCol")
				_Label(Italic:)
				<input type="checkbox" id="isItalic2", size="100%" checked="checked" oninput="Redraw();">
			_DivEnd
		_DivEnd
		
		<input type="button" value="Save" onclick="Save()">
		_BR
		_Label(　)
		<a href="https://twitter.com/share" class="twitter-share-button" data-via="e_jPhi" data-hashtags="ライフポイント・ジェネレータ" data-text=" ">Tweet</a>
		<script>
			!function(d, s, id){
				var js,fjs = d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
				if(!d.getElementById(id)){
					js = d.createElement(s);
					js.id = id;
					js.src = p+'://platform.twitter.com/widgets.js';
					fjs.parentNode.insertBefore(js,fjs);
				}
			}
			(document, 'script', 'twitter-wjs');
		</script>
		
		_H(3, Image)
		_Canvas(canvas, 0px, 0px, a)
		_DivBegin(id="FooterBk")
			Author: <a href=https://twitter.com/e_jPhi>e_jPhi</a>
		_DivEnd
	_BodyEnd
_HtmlEnd



