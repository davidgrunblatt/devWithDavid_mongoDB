
const express = require('express');
const router = express.Router(); 
const User = require('../schemas/user_schema'); 
const stamp = require('../util/timeStamp'); 
const bcrypt = require('bcrypt'); 

router.post('/', async (req, res) => {
    try {
        // check if username or email exist already 
        const check = await User
        .findOne({
            username: req.body.username,
            email: req.body.email
        })
        .catch(() => console.error('Unable to check for duplicates.'));
    
        if(check) return res.status(400).send('Username or email is already in use.'); 
    
        // create new instance of user 
        const newUser = new User({
            iat: stamp(), 
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
    
        // salt and hash the users password 
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newUser.password, salt)
        .catch(ex => console.error(ex.message)); 
        newUser.password = hash; 

        // save to mongoDB
        const save = await newUser.save(); 

        // send new user info 
        res.send(save); 
    }
    catch(ex) {
        res.status(400).send(ex.message); 
    }

});

module.exports = router; 