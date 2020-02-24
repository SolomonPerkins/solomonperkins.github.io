var snow = function(){};
var mainPanel;

snow.prototype.init = function() {
	mainPanel = document.querySelector('header');
	this.generatePelets(60);
};

snow.prototype.generatePelets = function(count) {
	var width = mainPanel.clientWidth,
		maxDelay = 5,
		snowpelets = [];

	for(var i = 0; i < count; i++) {
		var el = document.createElement('span');
		var params = this.randomizePeletes(width, maxDelay);
		el.style.animationDelay = params.delay + 's';
		el.style.left = params.width + 'px';
		el.className = 'snow-pelets snow-pelets-' + (i % 2);
		// snowpelets.push(el);
		mainPanel.appendChild(el);
	}
};

snow.prototype.randomizePeletes = function(width, delay) {
	var maxWidth = (Math.random() * Math.floor(width)),
		maxDelay = (Math.random() * Math.floor(delay));
	return {
		delay: maxDelay,
		width: maxWidth
	};
};



window.addEventListener('load', function() {
	var s = new snow();
	s.init();
});