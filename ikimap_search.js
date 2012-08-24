//http library is required for the function to work
var http = require('http');
//here we store the properties used by the function
var properties = require('./properties');

//usage example
var server = http.createServer(function(request, response) {
	 ikimap_searchString('ruta', function(data){
		 response.write(data);
	 });
});
server.listen(3000);


//search for string
function ikimap_searchString(searchString, cb){
	var options = {
			host : properties.HOST,
			port : 80,
			path : properties.SEARCH + searchString,
			method : 'POST',
			auth : properties.USER + ':' + properties.PASSWORD
		};
	
		var req = http.request(options, function(res) {
			res.setEncoding('utf8');
			var data = "";
			res.on('data', function(chunk) {
				data += chunk;
			});
			res.on('end', function() {
				cb(data);
			});
		});
		req.on('error', function(e) {
			throw new Error('ikimap_searchString got an error: ' + e.message);
		});	
		req.end();
} 
