const http = require('http');
const server = http.createServer((req, res) => {
	// to identify the url of browser
	console.log(req.url);
	// now go to broser and try to change the url, it will automatically catch the url
	// localhost:8080/sac

	// we can use req.url to make different routes like below:
	if (req.url === '/') {
		res.end('<h1>This is home page</h1>'); //can pass html
	} else if (req.url === '/about') {
		// we can also write someting first then can send it to broser like below
		res.write('<h1>About US page</h1>'); //write here content
		res.end(); //sending the response
	} else {
		// if we type wrong url then this page will appear
		// but if we go to the network tab then we can see that we are getting the below response that we
		// expected but status code is 200(in network tab header) that indicates request has
		// fulfilled successfully.But we don't want that instead of it we want to send some
		// client error response
		/*
            Informational responses (100–199)
            Successful responses (200–299)
            Redirection messages (300–399)
            Client error responses (400–499)
            Server error responses (500–599)

        */
		// as off now we are not getting any error in console
		// but to give the error as page not found, so we need to write the header with status code as 404

		// res.writeHead(404); //now we will get the error in console as well
		// to change the type = document
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end('<h1>404 Error</h1><p>Page not found error</p>');
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Start server: 8000 port');
});
