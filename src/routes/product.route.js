const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/', productController.getProductList);
router.post('id', productController.getProduct);
router.post('/search', productController.searchProduct)

module.exports = router
