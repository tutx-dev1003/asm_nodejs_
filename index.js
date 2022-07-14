const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require('method-override');
const engine = require('express-handlebars');

const router = require('./routers');
const db = require('./config/db');

// connect to db
db.connect();

const app = express();
const port = 3000;

// use static folder
app.use(express.static(path.join(__dirname, 'public/admin')));

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());
app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs'
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan('dev'));
// app.use(bodyParser.json());

// app.use(express.static("public/upload"));

// Route init
router(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
