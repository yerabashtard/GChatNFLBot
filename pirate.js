var request 		= require('request');

const websiteUri 	= "http://isithackday.com/arrpi.php?text=";

var maybePirate = function (message) {
	var uriEncodedMessage = encodeURIComponent(message);
	var encodedUri = encodeURI(websiteUri + uriEncodedMessage);
	request(encodedUri, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			return response;
		}
	})
}

module.exports = maybePirate;
/**
router.get('/', function(req, res) {
console.log("herree!!!!");
// http://isithackday.com/arrpi.php?text=hello%20my%20friend,%20do%20you%20know%20where%20I%20can%20meet%20a%20woman%20around%20here?
var path = "/arrpi.php?text=" + encodeURIComponent("Hello my friends!! What's happening?");
var options = {
host: 'isithackday.com',
port: 80,
path: path,
method: 'GET'
};

http.request(options, function(res) {
console.log('STATUS: ' + res.statusCode);
console.log('HEADERS: ' + JSON.stringify(res.headers));
res.setEncoding('utf8');
res.on('data', function (chunk) {
console.log('BODY: ' + chunk);
});
}).end();
});
**/
