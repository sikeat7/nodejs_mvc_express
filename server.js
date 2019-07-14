const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ silent: true });
const router = express.Router();

import Ctrlrs from './app/Controllers';

console.log(process.env);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return 'Hello Express JS';
});

app.get('/users', Ctrlrs('UserController@user_list'));

// Start the server
app.listen(process.env.PORT, () => {
   console.log("Express running → PORT " + process.env.PORT);
});