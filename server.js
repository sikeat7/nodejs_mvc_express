require("dotenv").config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const stylus = require('stylus');
const nib = require('nib');
const flash = require('connect-flash');
const multer = require('multer');
const logger = require('morgan');
const session = require('express-session');

const mongoose = require("./database");

const app = express();
const storage = multer({ dest: './storages' });

// Engine Setup
function compile(str, path) {
    return stylus(str).set('filename', path).use(nib);
}

// Require static assets from public folder
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(flash());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.JWT_SECRET
  })
);

// Routes
const webRoute = require('./routes/web');
app.use(webRoute);

// Start the server
app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log("Server is running → PORT " + process.env.PORT);
});