const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

const staticPath = path.join(__dirname, '../public')

//  builtin Middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
