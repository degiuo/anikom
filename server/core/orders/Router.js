const Router = require('express');
const controller = require('./Controller.js'); 
const auth = require('../middleware/authMiddleware.js');
const role = require('../middleware/roleMiddleware.js');

const router = new Router();

router.get('/orders', auth, controller.getOrders);
router.post('/order', auth, controller.create);
router.delete('/order', auth, controller.delete);
router.get('/status', role(['ADMIN']), controller.getStatus);
router.put('/status', role(['ADMIN']), controller.updateStatus);

module.exports = router;