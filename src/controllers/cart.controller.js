const cartItem = require('../services/cartItem.service')
const cart = require('../services/cart.service')

async function getCartItem(req,res){
    try {
        const cartID = await cart.findID(req.body.userID);
        const data = await cartItem.findID(cartID[0]._id);
        res.json(data);
    } catch (error) {
        console.log('error while get cart in controller', error);
    }
}
async function createCart(req,res){
    try {
        const createCart = await cart.create(req.body.userID);
        res.json('finish!!')
    } catch (error) {
        console.log('error while create cart in controller', error);
    }
}
async function createCartItem(req,res){
    try {
        const cartID = await cart.findID(req.body.userID)
        const item=  await cartItem.findProduct(req.body.productID, cartID[0]._id)
        if(item.length!==0 && !req.body.subEvent){
            cartItem.updateCart(item, ++item[0].quality);
        }
        if(item.length!==0 && req.body.subEvent){
            cartItem.updateCart(item, --item[0].quality);
        }
        if(item.length===0){
            await cartItem.create(cartID[0]._id, req.body.productID)
        }
        res.json('finish!!')
    } catch (error) {
        console.log('error while create cartItem in controller', error);
    }
}
async function deleteCartItem(req,res){
    try {
        await cartItem.del(req.body.cartItemID)
        res.json('finish!!')
    } catch (error) {
        console.log('error while create cartItem in controller', error);
    }
}
module.exports = {getCartItem, createCart, createCartItem, deleteCartItem}