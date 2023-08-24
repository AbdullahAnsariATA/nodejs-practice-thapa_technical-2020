const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to the homepage!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About Us</h1><p>This is the about page.</p>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});

const port = process.env.PORT || 3000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
