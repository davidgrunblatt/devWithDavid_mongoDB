
const express = require('express');
const router = express.Router();
const find = require('../util/find'); 

router.post('/', async (req, res) => {
    try {
        // look up account by username
        const search = await find(req.body.username);
        if(!search) return res.status(400).send('Unable to find username!'); 

        // update account information 
        await search.updateOne({
            username: req.body.username ? req.body.username : search.username,
            email: req.body.email ? req.body.email : search.email,
            name: req.body.name ? req.body.name : search.name
        })
        .catch(ex => console.error('Unable to update! ', ex.message)); 

        // send back to client 
        res.send(search); 
    } 
    catch(ex) {
        console.log('Error! ', ex.message); 
        res.status(400).send('Something went wrong!'); 
    }
});

module.exports = router; 