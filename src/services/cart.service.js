const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CartStructure = new Schema({
   userID: String,
},{
  collection: 'Cart'
});

const cartModule = mongoose.model('Cart', CartStructure);

async function create(userID){
    try {
        const data = await cartModule.create({'userID':userID})
        return data; 
    } catch (error) {
        console.log('error when create cart in database!', error)
    }
}

async function findID(AccountID){
    try {
        const data = await cartModule.find({'userID': AccountID})
        return data; 
    } catch (error) {
        console.log('error when query cart with id in database!', error)
    }
}

module.exports= {create, findID}