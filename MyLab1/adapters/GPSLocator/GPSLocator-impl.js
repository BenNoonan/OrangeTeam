// Google Map API call
function getLocation(gpsLat, gpsLong) {
path = "/maps/api/geocode/json?latlng=" + gpsLat + "," + gpsLong + "&sensor=false";
	var input = {
			method : 'get',
			returnedContentType : 'json',
			path : path
	};
	return WL.Server.invokeHttp(input);
}