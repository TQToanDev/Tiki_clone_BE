const express = require('express')
const route = express.Router();

const cart = require('../controllers/cart.controller')

route.post('/', cart.getCartItem);
route.post('/createCart', cart.createCart);
route.post('/addCartItem', cart.createCartItem);
route.post('/deleteCartItem', cart.deleteCartItem);

module.exports = route