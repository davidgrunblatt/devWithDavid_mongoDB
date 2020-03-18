
const bcrypt = require('bcrypt'); 

module.exports = async (password, hashed) => {
    // bcrypt decode and compare password
    const decode = await bcrypt.compare(password, hashed)
    .catch(ex => console.error('Unable to compare password', ex.message)); 
    
    return decode; 
}