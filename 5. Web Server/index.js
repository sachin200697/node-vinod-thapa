/*
    We can create our own web server instead of using third party web server like wamp or xamp appache web server.
    


*/

const http = require('http');

const server = http.createServer((req, res) => {
	res.end('First response of server');
});

// listen takes port number and a ip address of server/machine and a callback to indicate that server has
// started,
// for local machine we can use a special ip address: "127.0.0.1", it is called localhost, so instead of using
// "127.0.0.1" we can simply write localhost as well
server.listen(8000, '127.0.0.1', () => {
	console.log('Server has started on port 8000');
});

// server has created and we can run this file(using node index.js or nodemon index.js) and go to
// the browser: 127.0.0.1/8000
