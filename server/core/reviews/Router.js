const Router = require('express');
const controller = require('./Controller.js');
const auth = require('../middleware/authMiddleware.js');

const router = new Router();

router.get('/:id', controller.getComments);
router.post('/add', auth, controller.addComment);
router.post('/update', auth, controller.updateComment);
router.delete('/:id', auth, controller.deleteComment);

module.exports = router;