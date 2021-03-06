
// BASIC SERVER SETUP
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => console.log(`App is live on server ${PORT}!`)); 

if(!process.env.jwtPrivateKey){
    process.exit(1); 
    console.error('JWT Private Key is not defined.'); 
}

// MONGO DB 
require('./startup/mongoDB'); 

// MIDDLE WARE  
const bodyP = require('body-parser');
app.use(bodyP.json());
app.use(bodyP.urlencoded());

// ROUTES
require('./startup/routes')(app); 

// STATIC FILE
app.use(express.static('./public')); 

