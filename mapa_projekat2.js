function init() {
	
	var hotelLocation = {lat:44.443883, lng:18.876679};
		
	var mapOptions = {
		zoom: 12,
		center: hotelLocation,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		
		zoomControl: true,
		mapTypeControl: true,
		streetViewControl: false,
		overviewMapControl: false,
	};
	
	var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  	var hotelMarker = new google.maps.Marker({
		position: hotelLocation,
		map: venueMap,
		title: 'Hotel Košuta'
		});
		
	hotelMarker.setMap(venueMap);
}
function loadScript() {
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
	document.body.appendChild(script);
}

window.onload = loadScript;