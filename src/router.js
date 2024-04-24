const router = require('express').Router();
const tutorialsService = require('./services/tutorialsService');
const authController = require('./controllers/authController');
const tutorialsController = require('./controllers/tutorialsController');
const { isAuth } = require('./middlewares/authMiddleware');

router.get('/', isAuth, async (req, res) => {
    const userId = req.user;
    const user = await tutorialsService.getUser(userId);
    res.render('home', { user: user?.username });
});

router.use('/auth', authController);
router.use('/course', tutorialsController);

router.get('*', (req, res) => {

});

module.exports = router;