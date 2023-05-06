const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    // News
    app.use('/news', newsRouter);
    // Course
    app.use('/courses', coursesRouter);

    // Home, Search,...
    app.use('/', siteRouter);
}

module.exports = route;
