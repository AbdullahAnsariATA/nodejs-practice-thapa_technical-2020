const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const templatePath = path.join(__dirname,'../templates')

// set template engine 
app.set('view engine', 'ejs');
app.set('views', templatePath);

// render index.ejs
app.get('/', (req, res) => {
    res.render("index", {
        name:'Abdullah Ansari'
    });
});

// render about.ejs
app.get('/about', (req, res) => {
    res.render("about", {
        page:'AboutUs Page'
    });
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
