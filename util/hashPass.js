
const bcrypt = require('bcrypt');

module.exports = async (userPass) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userPass, salt)
    .catch(ex => console.error(ex.message)); 

    return hash; 
}