/* Format function adds some additional words to selections made by the user
in order to provide a more robust search.*/

function format(arr) {
	if (qArray.indexOf('dine') > -1) {
		qArray.push('restaurant');
	};
	if (qArray.indexOf('dance') > -1) {
		qArray.push('club nightclub');
	};
	if (qArray.indexOf('drink') > -1) {
		qArray.push('bar dive cocktails');
	};
};


/* qArray is the array which holds the user's selections
and will eventually be pushed to the Google Map API */

var qArray = ['portland oregon'];

$(function () {

	/*****************
	ALERT FUNCTIONS
	-- The following code creates two alerts, with the corresponding functions
	the alerts invoke when they are activated.

	One alert has one div fade in, while the other alert fades in a different div.
	Each alert uses the same variable to measure time (timeoutID).
	*****************/

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

	/*****************
	TimeoutID is the variable which is used as the timer for all of the
	alerts.
	*****************/

	var timeoutID;

	firstAlert();


	/*****************
	The following section of code is what occurs when a user clicks the 'play'
	icon on the jumbotron. Several divs fade out to clear the screen.
	Additional divs slide down, to become accessible to the user.

	The alert timer is cleared, and the secondAlert function is called.
	*****************/

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

	/*****************
	When a user hovers over a button with btn-select class a corresponding div
	which has the ID of #div + (the #ID of the button with btn-select) is emptied.

	It is then given text which corresponds to the #ID of the button, and fades in.

	When the user's mouse leaves the area of the button, if the button's color is
	not green, the text created by the mouse being over the button will fade out.
	*****************/

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

/*****************
If a button is clicked with the class btn-select a few things happen:

if the background-color is not green, then it is set to green and
the color of the text of the associated div is set to green
and if the #ID of the button is not 'search',
the #ID of the button is pushed to qArray.

So if the #ID of the button was 'east', then qArray now would have 'east'
as an element.

The alert timer is cleared, and the div which is activated by secondAlert fades out.
*****************/

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

	/*****************
	If the background-color of the button is green and is clicked, then it
	is set back to white, and the text of the div associated with the button
	is also set to back to gray.

	qArray is then searched for the #ID of the button pressed, and if the #ID
	is present, it is removed using splice.
	*****************/

		} else {
			$(this).css('background-color', 'rgb(255, 255, 255)');
			$('#div' + this.id).css('color', 'gray');

			var index = qArray.indexOf(this.id);
			 	if ( index > -1 ) {
					qArray.splice(index, 1);
				};
		};
	});

/*****************
When the button with the search icon is clicked, the #map div is appended
with a Google Map API URL, with the joint elements of the qArray added
in such a way that they become the keywords of a search.
*****************/


	$('#search').click(function (event) {
		event.preventDefault();

		format(qArray);
		$('.hid').slideUp();
		$('#map').delay(500).append('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=' +
		qArray.join(' ') +
		'&key=AIzaSyC-u-zGtcSYGbK84Yxq9a_cY76NyKvHoVs&zoom=12" allowfullscreen></iframe>').fadeIn(500);
	});

/*****************
When reset is clicked, all divs visible outside of the header are faded out or slide up.
The original divs are brought down, and faded in.
All divs which had been appended or altered, are emptied and given
their original values.

qArray is set back to its default contents.
*****************/


 $('.reset').click(function (event) {
	 event.preventDefault();

	 $('.hid').delay(500).slideUp();
	 $('#map').fadeOut(500);
	 $('.footer').fadeOut(1000);
	 $('.jumbotron').delay(1500).fadeIn(1000);
	 $('.footer').delay(2000).fadeIn(1000);
	 $('.btn-select').css('background-color', '#FFFFFF');
	 $('#divnorth, #divsouth, #diveast, #divwest, #divdrink, #divdance, #divdine, #map').delay(500).empty().css('color', 'gray');
	 $('#helpplay').hide().append('&nbsp;click <span class="glyphicon glyphicon-play" aria-hidden="true">');
	 firstAlert();
	 qArray = ['portland oregon'];
	 });

});
