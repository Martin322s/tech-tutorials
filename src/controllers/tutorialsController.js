const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create-course');
});

router.get('/details/:id', (req, res) => {
    res.render('course-details');
});

module.exports = router;