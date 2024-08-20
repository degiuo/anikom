const Router = require('express');
const controller = require('./Controller.js'); 
const roleMiddelware = require('../middleware/roleMiddleware.js');
const auth = require('../middleware/authMiddleware.js');

const router = new Router();

router.get('/closets', controller.getAll);
router.get('/closets/:id', controller.getOne);
router.post('/closets', roleMiddelware(['ADMIN']), controller.create);
router.put('/closets/:id', roleMiddelware(['ADMIN']), controller.update);
router.delete('/closets/:id', roleMiddelware(['ADMIN']), controller.delete);

module.exports = router;