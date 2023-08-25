const express = require('express');
const app = express();
const port = 3000;

const jsonData = [
    {
        id: 1,
        name: 'John'
    }, {
        id: 2,
        name: 'Jane'
    }, {
        id: 3,
        name: 'Bob'
    }
];

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// 1st way - Not Recommended for JSON data
app.get('/data', (req, res) => {
    res.send(jsonData);
});

// 2dn way - Recommended for JSON data
app.get('/data1', (req, res) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
