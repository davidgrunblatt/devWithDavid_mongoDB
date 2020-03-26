
const express = require('express');
const router = express.Router(); 
const decode = require('../util/decode'); 
const find = require('../util/find'); 

router.get('/', async (req, res) => {
    try {
        // search for user based on username 
        const search = await find(req.query.username); 
        if(!search) return res.status(400).send('Username was not found!'); 

        // bcrypt decode and compare password
        const password = await decode(req.query.password, search.password);
        if(!password) return res.status(400).send('Password is incorrect'); 

        // set payload to dummy account. send to client
        const dummyAccount = {
            username: search.username,
            name: search.name,
            email: search.email
        }
        // generate AUTH token
        const token = await search.generateAuthToken(); 

        res
        .header('x-auth-token', token)
        .header('acess-control-expose-headers', 'x-auth-token')
        .send(dummyAccount);
    }
    catch(ex) {
        res.status(400).send(ex.message); 
    }
});

module.exports = router; 