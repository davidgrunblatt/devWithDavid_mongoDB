
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 

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

// GENERATE AUTH TOKEN 
schema.methods.generateAuthToken = function(){
    // sign new jwt with basic user info
    const token = jwt.sign({
        user_id: this._id,
        username: this.username,
        email: this.email,
    }, process.env.jwtPrivateKey); 

    return token; 
}

 // Create a Model
const User = mongoose.model('User', schema);

 module.exports = User; 