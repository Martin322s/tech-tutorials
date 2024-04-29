const { isAuth } = require('../middlewares/authMiddleware');
const tutorialsService = require('../services/tutorialsService');

const router = require('express').Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create-course');
});

router.post('/create', async (req, res) => {
    try {
        if (Object.values(req.body).some(x => x === '')) {
            alert('All fields are required!');
        } else {
            await tutorialsService.createCourse(req.body);
            res.redirect('/');
        }
    } catch (err) {

    }
});

router.get('/details/:id', (req, res) => {
    res.render('course-details');
});

module.exports = router;