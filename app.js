
// BASIC SETUP
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 
const bodyP = require('body-parser');

// DB CONNECTION STRING 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://dpg1919:Claptoncocaine13@devmongo-ak3dm.mongodb.net/test?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB is connected!'))
.catch(ex => console.error(ex.message));

// MIDDLE WARE  
app.use(bodyP.json());
app.use(bodyP.urlencoded());

app.listen(PORT, () => console.log(`App is live on server ${PORT}!`)); 