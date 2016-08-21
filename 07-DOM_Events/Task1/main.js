var slider = {
	slides: ['images/01.jpg',
			'images/02.jpg',
			'images/03.jpg',
			'images/04.jpg',
			'images/05.jpg',
			'images/06.jpg'],
	index: 0, 
	set: function(image) {  
		document.getElementById("image").style.backgroundImage = "url("+image+")";
	},
	init: function() { 
		this.set(this.slides[this.index]);
	},
	left: function() { 
		this.index--;
		if (this.index < 0) {
			this.index = this.slides.length-1;
		}
		this.set(this.slides[this.index]);
	},
	right: function() { 
		this.index++;
		if (this.index == this.slides.length) {
			this.index = 0;
		}
		this.set(this.slides[this.index]);		
	}
};

onload = function makeSlider(){
	let leftBttn = document.getElementsByClassName('left')[0];
	let rightBttn = document.getElementsByClassName('right')[0];
	slider.init();

	setInterval(function() { 
		slider.right();
	},10000);
	
	leftBttn.addEventListener('click', function() {
		slider.left();
	});
	rightBttn.addEventListener('click', function() {
		slider.right();
	});
}