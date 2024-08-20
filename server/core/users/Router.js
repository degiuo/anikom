const Router = require('express');
const bodyParser = require('body-parser');
const controller = require('./Controller.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const router = new Router();

router.get('/user', authMiddleware, controller.getUsers);
router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/logout', authMiddleware, controller.logout);

module.exports = router;