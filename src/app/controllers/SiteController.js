const Course = require('../models/CourseModel');

class SiteController {
    // [GET] /
    home(req, res) {
        Course.find({})
            .then((courses) => {
                res.json(courses);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
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
