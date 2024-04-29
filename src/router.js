const router = require('express').Router();
const tutorialsService = require('./services/tutorialsService');
const authController = require('./controllers/authController');
const tutorialsController = require('./controllers/tutorialsController');

router.get('/', async (req, res) => {
    try {
        const userId = req?.user;
        let user;
        let courses = await tutorialsService.getAllCourses();
        courses = courses.map(x => {
            x.createdAt = x.createdAt.toString().split('2024')[0];
            return x;
        })

        if (userId) {
            user = await tutorialsService.getUser(userId);
        }

        res.render('home', { user: user?.username, courses: courses });
    } catch (err) {
        console.log(err);
    }
});

router.use('/auth', authController);
router.use('/course', tutorialsController);

router.get('*', (req, res) => {

});

module.exports = router;