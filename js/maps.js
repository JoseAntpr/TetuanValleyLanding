function initMap() {
			 var myLatLng = {lat: 36.718371, lng: -4.497238};

			 // Create a map object and specify the DOM element for display.
			 var map = new google.maps.Map(document.getElementById('surabaya'), {
				 center: myLatLng,
				 scrollwheel: false,
				 zoom: 16
			 });

			 // Create a marker and set its position.
			 var marker = new google.maps.Marker({
				 map: map,
				 position: myLatLng,
				 title: 'Hello World!'
			 });
		 }
