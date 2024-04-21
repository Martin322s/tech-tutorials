const router = require('express').Router();
const authController = require('./controllers/authController');
const tutorialsController = require('./controllers/tutorialsController');

router.get('/', (req, res) => {
    res.render('home');
});

router.use('/auth', authController);
router.use('/course', tutorialsController);

router.get('*', (req, res) => {
    
});

module.exports = router;