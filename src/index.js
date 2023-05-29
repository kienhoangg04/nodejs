const path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const port = 8080;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Static file
app.use(express.static(path.join(__dirname, 'public'))); // public

// form-html -> middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// XMLHttpRequest, fetch, axios -> javascript
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        defaultLayout: 'main',
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //views

// GET, POST, PUT, PATCH,...
app.use(methodOverride('_method'));

// Routes init
route(app);

//
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
