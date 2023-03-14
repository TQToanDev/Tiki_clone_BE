const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductStructure = new Schema({
    name: String,
    price: String,
    img: String,
    rate: String,
    sold: String,
},{
  collection: 'Product'
});

const ProductModule = mongoose.model('Product', ProductStructure);

async function findAll(){
    try {
        const data = await ProductModule.find({})
        return data;
    } catch (error) {
        console.log('error when query products in database!', error)
    }

}
async function findID(id){
    try {
        const data = await ProductModule.find({_id: id})
        return data;
    } catch (error) {
        console.log('error when query product with id in database!', error)
    }

}
async function searchSting(searchString, filter){
    try {
        const data = await ProductModule.find({name: {$regex: searchString}}).sort({rate: 1})
        return data;
    } catch (error) {
        console.log('error when search product with id in database!', error)
    }

}

module.exports= {findAll, searchSting}