var owl = $('.owl-carousel');

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		onInitialized: function(e) {
	    $('.brief-counter').text('1 из ' + this.items().length)
	    console.log();
		}
	});
});



owl.on('changed.owl.carousel', function(e) {
	setTimeout(function(){
		var currentHeight = $('.owl-stage .active').height() - 15;

		$('.brief-counter').text(++e.page.index + ' из ' + e.item.count);
		$('.owl-nav').css({'top': currentHeight});
		console.log(currentHeight)
	});
});

$('textarea')
	.focus(function() { 
		$(this).css("background", "none");
		$(this).css("width", "490px");
	})
	.blur(function() { 
		if ($(this)[0].value == '') { 
			$(this).css("background-color", "rgba(56, 22, 0, 0.3)");
			$(this).css("width", "210px");
		}

var autoHeight = $('.owl-stage .brief-slide:eq(0)').height();
console.log(autoHeight);

});

// input file name

;(function (document, window, index){
	'use strict';
	var inputs = document.querySelectorAll('.inputfile');
	Array.prototype.forEach.call(inputs, function (input) {
		var label = input.nextElementSibling,
				labelVal = label.innerHTML;

		input.addEventListener('change', function (e) {
			var fileName = '';
			if (this.files && this.files.length > 1)
				fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
			else
				fileName = e.target.value.split('\\').pop();

			if (fileName)
				label.querySelector('span').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener('focus', function () {
			input.classList.add('has-focus');
		});
		input.addEventListener('blur', function () {
			input.classList.remove('has-focus');
		});
	});
}(document, window, 0));