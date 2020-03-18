
// BASIC SERVER SETUP
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 
const bodyP = require('body-parser');
app.listen(PORT, () => console.log(`App is live on server ${PORT}!`)); 

// MONGO DB 
require('./startup/mongoDB'); 

// MIDDLE WARE  
app.use(bodyP.json());
app.use(bodyP.urlencoded());

// ROUTES
require('./startup/routes')(app); 

// STATIC FILE
app.use(express.static('./public')); 

