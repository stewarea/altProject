var qArray = ['portland oregon'];

$(function () {

	$('#begin').click(function (event) {
		event.preventDefault();

		$('.footer').fadeOut(500);
		$('.jumbotron').fadeOut(1000);
		$('.hid').delay(1000).slideDown(1000);
	});

 $('.btn-circle').mouseenter(function (event) {
	 event.preventDefault();

	 $('#div' + this.id).empty();
	 $('#div' + this.id).append('<h4>' + this.id + '</h4>').fadeIn(500);
 })

 .mouseleave(function (event) {
	 event.preventDefault();

	 	if ($(this).css('background-color') != 'rgb(121, 204, 94)' ) {
			$('#div' + this.id).fadeOut(500);
		};
});

$('.btn').click(function (event) {
	event.preventDefault();

		if ($(this).css('background-color') !==  'rgb(121, 204, 94)') {
			$(this).css('background-color',  'rgb(121, 204, 94)');
			$('#div' + this.id).css('color', 'rgb(121, 204, 94)');
			qArray.push(this.id);

		} else {
			$(this).css('background-color',  'rgb(255, 255, 255)');
			$('#div' + this.id).css('color', 'gray');

			var index = qArray.indexOf(this.id);
			 	if ( index > -1 ) {
					qArray.splice(index, 1);
				};
		};
});

$('#search').click(function (event) {
	event.preventDefault();

	$('.hid').delay(500).slideUp();
	$('#map').append('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=' +
	qArray.join(' ') +
	'&key=AIzaSyC-u-zGtcSYGbK84Yxq9a_cY76NyKvHoVs" allowfullscreen></iframe>').fadeIn(500);
});

 $('.reset').click(function (event) {
	 event.preventDefault();

	 $('.hid').delay(500).slideUp();
	 $('#map').fadeOut(500);
	 $('.footer').fadeOut(1000);
	 $('.jumbotron').delay(1500).fadeIn(1000);
	 $('.footer').delay(2000).fadeIn(1000);
	 $('.btn').css('background-color', '#FFFFFF');
	 $('#divnorth, #divsouth, #diveast, #divwest, #divdrink, #divdance, #divdate').empty();
	 qArray = ['portland oregon'];
	});
});