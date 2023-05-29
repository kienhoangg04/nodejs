const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    // News
    app.use('/news', newsRouter);
    // Course
    app.use('/courses', coursesRouter);
    // Me
    app.use('/me', meRouter);

    // Home, Search,...
    app.use('/', siteRouter);
}

module.exports = route;
