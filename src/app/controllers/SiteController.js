const Course = require('../models/CourseModel');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                next(err);
            });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /profile
    profile(req, res) {
        res.render('profile');
    }
}

module.exports = new SiteController();
