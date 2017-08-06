;(function(window,document) {
	function SlideBox() {
		var slidebox = document.getElementsByClassName("slide-box");
		var slide = slidebox[0].getElementsByClassName("slide");
		this.slideBox = slidebox;
		this.slides = slide;
		
	}
	
	SlideBox.prototype = {
		scroll: function() {
			var len = this.slides.length;
			var width = this.slideBox[0].offsetWidth;
			for(var i = 0; i < len; i++) {
				
				if(this.slides[i].style.left == "" ) {
					this.slides[i].style.left = this.slides[i].offsetWidth * i + "px"; 
				}
				this.slides[i].style.transition = "left 0.8s"
				var t = parseInt(this.slides[i].style.left) - width;
				/*this.slides[i].style.display = "block";*/
				this.slides[i].style.left = t + "px";
				if(t < -width) {
					this.slides[i].style.left = this.slides[i].offsetWidth * (len-2) + "px";
					this.slides[i].style.transition = "none";
				}
			}
		},
		autoScroll: function() {
			var self = this;
			this.scroll();
			setTimeout(function() {
				self.autoScroll();	
			}, 1000)
			
		}
		
	};
	
	window.SlideBox = window.SlideBox || SlideBox;
	
}(window,document))

var slidebox = new SlideBox();
slidebox.autoScroll();
