function close_box()
	{
		$('#backdrop, .lightbox').fadeOut(300), function() {
			$('#backdrop, .lightbox').css('display', 'none');
		};
	}

$('document').ready(function() {

		//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.backToTop').fadeIn();
		} else {
			$('.backToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.backToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	$('#submit').click(function(){
		alert("Thank you for getting in touch!");
	});

	$('#burger-show').click(function() {
		$('.dropdown').slideToggle(800);
	});

	$('.entry').on('click', function(e) {

		var target = $(e.target);
		var src = target.attr('src');

		$('.lightbox img').attr('src', src);
        $('.lightbox').fadeIn(300);      // to make the box visible
        $('#backdrop').fadeIn(800);       // to make the backdrop visible
    });


    $('#backdrop').click(function(){
					close_box();
				});

 //    var $entries = $('.entry img')
	// var imgs = [];
	// for (var i=0; i < entries.length, i++) {
	// var src = entries[i].attr('src')
	// imgs.push(src);
	// }

	// $('.next').on('click', function(e) {
	// var $target = $(e.target);
	// var src = target.attr('src');

	// $('.lightbox img').attr('src', src);
	// }

});