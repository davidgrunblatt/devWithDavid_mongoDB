
// DB CONNECTION STRING 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://dpg1919:' + process.env.MONGO + '@devmongo-ak3dm.mongodb.net/test?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB is connected!'))
.catch(ex => console.error("mongo error", ex.message));

module.exports = mongoose; 