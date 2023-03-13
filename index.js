const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/color', (req, res) => {
    res.render('color');
})

app.get('/bio', (req, res) => {
    res.render('bio');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})