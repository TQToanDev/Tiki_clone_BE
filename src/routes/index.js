const express = require('express');
// const router = express.Router();
const productRoute = require('./product.route')
const cartRoute = require('./cart.router')

function setRoute(app){
   app.use('/api/product', productRoute)
   app.use('/api/cart', cartRoute) 
}

module.exports = setRoute