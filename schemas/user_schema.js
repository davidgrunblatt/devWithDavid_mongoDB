
const mongoose = require('mongoose');

 // Create a User Schema
 const schema = new mongoose.Schema({
    iat: {
        type: Date
    },
     username: {
         type: String,
         unique: true
     },
     name: {
         type: String
     },
     email: {
         type: String
     },
     password: {
         type: String
     }
 });

 // Create a Model
 const User = mongoose.model('User', schema);

 module.exports = User; 