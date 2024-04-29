const router = require('express').Router();
const tutorialsService = require('./services/tutorialsService');
const authController = require('./controllers/authController');
const tutorialsController = require('./controllers/tutorialsController');

router.get('/', async (req, res) => {
    try {
        const userId = req?.user;
        let user;

        if (userId) {
            user = await tutorialsService.getUser(userId);
        }

        res.render('home', { user: user?.username })
    } catch (err) {
        console.log(err);
    }
});

router.use('/auth', authController);
router.use('/course', tutorialsController);

router.get('*', (req, res) => {

});

module.exports = router;