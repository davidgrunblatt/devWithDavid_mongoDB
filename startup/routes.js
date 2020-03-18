
// ROUTE IMPORTS 
const createUser = require('../routes/createUser'); 
const loginUser = require('../routes/login'); 
const putUser = require('../routes/putUser');   
const deleteUser = require('../routes/deleteUser');    

module.exports = (app) => {
    // API END POINTS 
    app.use('/api/createUser', createUser); 
    app.use('/api/loginUser', loginUser); 
    app.use('/api/putUser', putUser); 
    app.use('/api/deleteUser', deleteUser); 
}
