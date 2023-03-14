const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const accountStructure = new Schema({
    userName: String,
    password: String,
    address: String,
    phoneNumber: String,
},{
    collation:'Account'
});

const accountModule = mongoose.model('Account',accountStructure);

async function findAll(){
    try {
        const data = await accountModule.find({});
        return data;
    } catch (error) {
        console.log('error when query account in database!', error)
    }
}

async function create(userName, password, address, phoneNumber){
    try {
        const data = await accountModule.create({
            'userName': userName,
            'password': password,
            'address': address,
            'phoneNumber': phoneNumber,
        });
    } catch (error) {
        console.log('error when create account in database!', error)
    }
}

module.exports= {findAll, create}