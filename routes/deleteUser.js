
const express = require('express');
const router = express.Router();
const User = require('../schemas/user_schema'); 
const auth = require('../middleware/authentication'); 

router.post('/', auth, async (req, res) => {
    try {
        // Find and Delete by Username 
        const search = await User
        .findOneAndDelete({
            username: req.body.username
        })
        .catch(ex => console.error(ex.message)); 
        if(!search) return res.status(400).send('Unable to find username!'); 

        res.send('Successfully deleted account');
    }
    catch(ex){
        console.error(ex.message);
        res.status(400).send('Something went wrong deleting your account!'); 
    }
});

module.exports = router; 

