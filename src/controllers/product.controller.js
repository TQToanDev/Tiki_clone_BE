const product = require('../services/product.service')

async function getProductList(req, res){
    try {
        const data = await product.findAll();
        res.json(data);
        
    } catch (error) {
        console.log('error while get product in controller', error);
    }

}
async function getProduct(req, res){
    try {
        const data = await product.findID(req.body.productID);
        res.json(data);
        
    } catch (error) {
        console.log('error while get product in controller', error);
    }
}

async function searchProduct(req, res){
    try {
        const data = await product.searchSting(req.body.searchString, req.body.filter);
        res.json(data);
    } catch (error) {
        console.log('error while get product in controller', error);
    }
}



module.exports = {getProduct, getProductList, searchProduct}