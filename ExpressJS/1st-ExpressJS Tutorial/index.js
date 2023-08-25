const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! from Home Page');
});

app.get('/about', (req, res) => {
    res.send('Hello, World! from About Page');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
