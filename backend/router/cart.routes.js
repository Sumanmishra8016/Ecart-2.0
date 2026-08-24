const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart.controller');

router.get('/', controller.getCart);
router.post('/', controller.addToCart);
router.delete('/:id', controller.removeFromCart);

module.exports = router;