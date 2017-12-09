var http = require('http');
var firstPORT = 7000;
var secondPORT = 7500;

function handleRequest1(request, response) {
	response.end("You have kind eyes");
}

function handleRequest2(request, response) {
	response.end("Delete your account!");
}

var firstServer = http.createServer(handleRequest1);
var secondServer = http.createServer(handleRequest2);

firstServer.listen(firstPORT, function() {
	console.log(`Server is listening to ${firstPORT}`);
});

secondServer.listen(secondPORT, function() {
	console.log(`Server is listening to ${secondPORT}`);
});