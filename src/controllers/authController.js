const router = require('express').Router();
const { isGuest, isAuth } = require('../middlewares/authMiddleware');
const authService = require('../services/authService');

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    const { username, password, rePassword } = req.body;
    try {
        if (!Object.values(req.body).some(x => x === '')) {
            if (password === rePassword) {
                const user = await authService.registerUser({ username, password });

                if (typeof user === 'object') {
                    const token = await authService.generateToken(user);
                    res.cookie('session', token);
                    res.status(200).redirect('/');
                } else {
                    res.status(400).render('auth/register', { message: user });
                }
            } else {
                throw {
                    message: 'Passwords don\'t match!'
                }
            }
        } else {
            throw {
                message: 'All fields must be filled correctly!'
            }
        }
    } catch (err) {
        res.status(400).render('auth/register', { message: err.message });
    }
});

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username !== '' && password !== '') {
            const user = await authService.loginUser({ username, password });
            if (typeof user === 'object' && !user.message) {
                const token = await authService.generateToken(user);
                res.cookie('session', token);
                res.redirect('/');
            } else {
                throw user;
            }
        } else {
            throw { message: 'All fields must be filled correctly!' }
        }
    } catch (err) {
        res.status(401).render('auth/login', { error: err.message });
    }
});

router.get('/logout', isAuth, (req, res) => {
    if (req.headers.cookie) {
        res.clearCookie('session');
        res.redirect('/');
    }
});

module.exports = router;