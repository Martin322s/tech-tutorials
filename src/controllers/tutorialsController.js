const { isAuth } = require('../middlewares/authMiddleware');
const tutorialsService = require('../services/tutorialsService');

const router = require('express').Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create-course');
});

router.post('/create', (req, res) => {
    const { title, description, imageUrl, duration } = req.body;

    try {
        if (Object.values(req.body).some(x => x === '')) {
            alert('All fields are required!');
        } else {
            
        }
    } catch (err) {

    }
});

router.get('/details/:id', (req, res) => {
    res.render('course-details');
});

module.exports = router;