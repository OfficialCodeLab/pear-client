$(document).ready(function(){


		var slideout = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menu'),
			'padding': 256,
			'tolerance': 70
		});

		// Toggle button
		document.querySelector('.toggle-button').addEventListener('click', function() {
			slideout.toggle();
		});

		document.querySelector('.menu').addEventListener('click', function(eve) {
		  if (eve.target.nodeName === 'A') { slideout.close(); }
		});

		slideout.on('beforeopen', function() {
		  document.querySelector('.fixed').classList.add('fixed-open');
		});

		slideout.on('beforeclose', function() {
		  document.querySelector('.fixed').classList.remove('fixed-open');
		});
});