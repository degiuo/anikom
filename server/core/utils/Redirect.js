const Router = require('express');
const router = Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.get('/', (req, res) => {
    res.redirect('/home');
})

router.get('/home', (req, res) => {
    res.sendFile('/client/html/index.html', { root: '.' });
});

router.get('/about', (req, res) => {
    res.sendFile('/client/html/about.html', { root: '.' });
});

router.get('/login', (req, res) => {
    res.sendFile('/client/html/login.html', { root: '.' });
});

router.get('/registration', (req, res) => {
    res.sendFile('/client/html/registration.html', { root: '.' });
});

router.get('/add', role(['ADMIN']),(req, res) => {
    res.sendFile('/client/html/addCloset.html', { root: '.' });
});

router.get('/update/:id', role(['ADMIN']), (req, res) => {
    res.sendFile('/client/html/updateCloset.html', { root: '.' });
});

router.get('/closets/:id', (req, res) => {
    res.sendFile('/client/html/closetPage.html', { root: '.' });
});

router.get('/orders', auth, (req, res) => {
    res.sendFile('/client/html/ordersPage.html', { root: '.' });
});

router.get('/news', (req, res) => {
    res.sendFile('/client/html/newsPage.html', { root: '.' });
})

router.get('/news_admin', role(['ADMIN']), (req, res) => {
    res.sendFile('/client/html/newsAdminPage.html', { root: '.' })
})

module.exports = router;