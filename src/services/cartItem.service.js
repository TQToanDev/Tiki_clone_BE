const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CartItemStructure = new Schema({
    cartID: {
        type: String,
        ref: 'Cart'
    },
    productID: {
        type: String,
        ref: 'Product'
    },
    quality: Number,
},{
  collection: 'CartItem'
});

const cartItemModule = mongoose.model('CartItem', CartItemStructure);

async function findID(cartID){
    try {
        const data = await cartItemModule.find({'cartID': cartID}).populate('productID')
        return data; 
    } catch (error) {
        console.log('error when query cartItems in database!', error)
    }
}
async function findProduct(productID, cartID){
    try {
        const data = await cartItemModule.find({'productID': productID, 'cartID': cartID}).populate('productID')
        return data; 
    } catch (error) {
        console.log('error when query cartItems in database!', error)
    }
}
async function create(cartID, productID){
    try {
        const data = await cartItemModule.create({'cartID': cartID, 'productID': productID, 'quality':1})
        return data; 
    } catch (error) {
        console.log('error when create cartItems in database!', error)
    }
}
async function del(cartItemID){
    try {
        const data = await cartItemModule.deleteOne({_id :cartItemID})
        return data; 
    } catch (error) {
        console.log('error when create cartItems in database!', error)
    }
}

async function updateCart(cartItemID, value){
    try {
        const data = await cartItemModule.updateOne({_id: cartItemID[0]._id},{$set:{cartID: cartItemID[0].cartID, productID: cartItemID[0].productID._id , quality: value}})
        return data; 
    } catch (error) {
        console.log('error when update cartItems in database!', error)
    }
}

module.exports= {findID, findProduct, create, del, updateCart}