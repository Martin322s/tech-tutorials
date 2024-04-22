const router = require('express').Router();
const authService = require('./services/authService');
const authController = require('./controllers/authController');
const tutorialsController = require('./controllers/tutorialsController');
const { isAuth } = require('./middlewares/authMiddleware');

router.get('/', isAuth, async (req, res) => {
    const userId = req.user;
    const user = await 
    res.render('home', { user: {} });
});

router.use('/auth', authController);
router.use('/course', tutorialsController);

router.get('*', (req, res) => {

});

module.exports = router;