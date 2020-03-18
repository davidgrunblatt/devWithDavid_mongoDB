
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

// ROUTE MODULES 
const createUser = require('./routes/createUser'); 
const loginUser = require('./routes/login'); 
const putUser = require('./routes/putUser');    
// ROUTES 
app.use('/api/createUser', createUser); 
app.use('/api/loginUser', loginUser); 
app.use('/api/putUser', putUser); 

// STATIC FILE
app.use(express.static('./public')); 

