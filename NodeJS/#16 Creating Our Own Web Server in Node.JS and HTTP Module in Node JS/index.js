// Import the required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => { // Set the response header with a status code of 200 (OK) and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send a response message
    res.end('Hello, World!\n');
});

// Define the port and hostname for the server to listen on
const port = 3000;
const hostname = 'localhost';

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
