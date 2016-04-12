function format(arr) {

	var north = arr.indexOf('north');
	var south = arr.indexOf('south');
	var east = arr.indexOf('east');
	var west = arr.indexOf('west');

		if (north != -1 && east != -1) {
			arr.push('alberta mississippi fremont');
		};

		if (north != -1 && west != -1) {
			arr.push('pearl 21st burnside downtown');
		};

		if (north != -1 && east = -1 && west = -1) {
			arr.push('kenton williams st. johns lombard');
		};

		if (south != -1 && east != -1) {
			arr.push('division clinton powell');
		};

		if (south != -1 && west != -1) {
			arr.push('goose hollow south waterfront');
		};

		if (south != -1 && east = -1 && west = -1) {
			arr.push('+sellwood +woodstock +foster +holgate');
		};

		if (north = -1 && south = -1 && east != -1) {
			arr.push('+82nd +122nd')
		}

		if (north = -1 && south = -1 && west != -1) {
			arr.push('+82nd +122nd +sellwood +woodstock +foster +holgate +division +clinton +powell')
		}
};

function firstAlert() {
	timeoutID = window.setTimeout(helpOutplay, 5000);
};

function helpOutplay() {
	$('#helpplay').fadeIn(500);
};

function helpOutselect() {
	$('#helpselect').fadeIn(500)
};

function secondAlert() {
	timeoutID = window.setTimeout(helpOutselect, 5000);
};

var qArray = ['portland oregon'];

$(function () {

	var timeoutID;

	firstAlert();

	$('#begin').click(function (event) {
		event.preventDefault();

		$('#helpplay').fadeOut(250);
		$('.footer').fadeOut(500);
		$('.jumbotron').fadeOut(1000);
		$('.hid').delay(1000).slideDown(1000);
		$('#helpplay').delay(300).empty();
		window.clearTimeout(timeoutID);
		secondAlert();
	});

 $('.btn-select').mouseenter(function (event) {
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

$('.btn-select').click(function (event) {
	event.preventDefault();

		if ($(this).css('background-color') !==  'rgb(121, 204, 94)') {
			$(this).css('background-color',  'rgb(121, 204, 94)');
			$('#div' + this.id).css('color', 'rgb(121, 204, 94)');
				if (this.id !== 'search') {
					qArray.push(this.id);
		};

			window.clearTimeout(timeoutID);
	 		$('#helpselect').fadeOut(250);

		} else {
			$(this).css('background-color', 'rgb(255, 255, 255)');
			$('#div' + this.id).css('color', 'gray');

			var index = qArray.indexOf(this.id);
			 	if ( index > -1 ) {
					qArray.splice(index, 1);
				};
		};
});

$('#search').click(function (event) {
	event.preventDefault();

	format(qArray);
	$('.hid').slideUp();
	$('#map').delay(500).append('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=' +
	qArray.join(' ') +
	'&key=AIzaSyC-u-zGtcSYGbK84Yxq9a_cY76NyKvHoVs&zoom=12" allowfullscreen></iframe>').fadeIn(500);
});

 $('.reset').click(function (event) {
	 event.preventDefault();

	 $('.hid').delay(500).slideUp();
	 $('#map').fadeOut(500);
	 $('.footer').fadeOut(1000);
	 $('.jumbotron').delay(1500).fadeIn(1000);
	 $('.footer').delay(2000).fadeIn(1000);
	 $('.btn-select').css('background-color', '#FFFFFF');
	 $('#divnorth, #divsouth, #diveast, #divwest, #divdrink, #divdance, #diveat, #map').delay(500).empty().css('color', 'gray');
	 $('#helpplay').hide().append('&nbsp;click <span class="glyphicon glyphicon-play" aria-hidden="true">');
	 firstAlert();
	 qArray = ['portland oregon'];
	});


});
