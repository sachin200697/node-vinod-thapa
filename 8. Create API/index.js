/*
API: Application Programming Interface

API helps software to communicate each other.
*/

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Hello');
	} else if (req.url === '/userapi') {
		fs.readFile(`${__dirname}/userAPI/userapi.json`, 'utf-8', (err, data) => {
			console.log(data);

			// we need to tell browser that what type of data we are working with
			// if we tell browser then there is a extension "JSON Viewer", we can also use that
			// extension to see the data in case if it is JSON data.
			res.writeHead(202, { 'Content-Type': 'application/json' });
			res.end(data);
		});
	} else if (req.url === '/userapi/4') {
		fs.readFile(`${__dirname}/userAPI/userapi.json`, 'utf-8', (err, data) => {
			console.log(data);
			const obj = JSON.parse(data);
			const users = obj.filter((user) => user.id == '4');
			const user = users[0];
			const jsonUser = JSON.stringify(user);

			// tell browser the type of data
			res.writeHead(202, { 'Content-Type': 'application/json' });
			res.end(jsonUser);
		});
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end('No page found');
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Server Started');
});
