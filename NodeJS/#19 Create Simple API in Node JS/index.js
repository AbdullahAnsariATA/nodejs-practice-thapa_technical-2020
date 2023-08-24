const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to the homepage!</h1>');
    } else if (req.url === '/users') {
        fs.readFile('userApi.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(data);
            }
        });
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
