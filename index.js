var http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<h1>Hello World</h1>');
	res.end();
}).listen(3000);

console.log('server running  port 3000')
