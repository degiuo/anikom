const Router = require('express');
const controller = require('./Controller.js'); 
const auth = require('../middleware/authMiddleware.js');
const role = require('../middleware/roleMiddleware.js');

const router = new Router();

router.get('/news', controller.getNews);
router.post('/news', role(['ADMIN']), controller.create);
router.delete('/news/:id', role(['ADMIN']), controller.delete);
router.put('/news/:id', role(['ADMIN']), controller.update);

module.exports = router;