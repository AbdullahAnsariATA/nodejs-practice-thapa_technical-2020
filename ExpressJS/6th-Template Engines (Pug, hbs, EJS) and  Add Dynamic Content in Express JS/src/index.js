const express = require('express');
const app = express();
const port = 3000;

// set template engine 
app.set('view engine', 'ejs')

// render index.ejs
app.get('/', (req, res) => {
    res.render("index", {
        name:'Abdullah Ansari'
    });
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
