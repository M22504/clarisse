initial_body = document.body
console.log(initial_body);

//Load beats per minute html

// Strip css from website

const cssutil = {
	stripStylesheets: function() {
		const elements = document.querySelectorAll('link[rel=stylesheet]');
		for (let i = 0; i < elements.length; i++) {
			elements[i].parentNode.removeChild(elements[i]);
		}
		[].slice.call(document.getElementsByTagName('style')).forEach(function(el) {
			el.parentNode.removeChild(el);
		});
	},
	stripInline: function() {
		[].slice.call(document.getElementsByTagName('*')).forEach(function (el) {
			el.style = "";
			if(el.hasAttribute("bgColor")) {
				el.removeAttribute("bgColor");
			}
		});
	},
	stripAll: function() {
		this.stripStylesheets()
		this.stripInline()
	},
	applyStyle: function() {
		const styleElement = document.createElement('style');
		styleElement.type = 'text/css';
		styleElement.href = "https://taniarascia.github.io/primitive/css/main.css";
		document.head.appendChild(styleElement);
	},
	init: function() {
		this.stripAll();
		this.applyStyle();
	},
}

//Replace content of webpage
window.onload = function() {
	cssutil.init()
}
