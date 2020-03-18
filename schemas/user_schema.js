
const mongoose = require('mongoose');

 // Create a User Schema
 const schema = new mongoose.Schema({
    iat: {
        type: Date
    },
     username: {
         type: String,
         required: true, 
         unique: true,
         max: 120
     },
     name: {
         type: String
     },
     email: {
         type: String,
         required: true, 
         unique: true,
         max: 120
     },
     password: {
         type: String,
         required: true,
         max: 220
     }
 });

 // Create a Model
 const User = mongoose.model('User', schema);

 module.exports = User; 