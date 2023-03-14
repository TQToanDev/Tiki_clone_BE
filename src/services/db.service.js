const mongoose = require('mongoose');

function connectDB(){
  mongoose.connect('mongodb://localhost:27017/Tiki-Clone')
  .then(() => console.log('DB Connected!'));
} 

module.exports = {connectDB}