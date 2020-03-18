
const User = require('../schemas/user_schema');

module.exports = async (username) => {
    try {
        // search for user based on username 
        const search = await User 
        .findOne({
            username: username
        })
        .catch(ex => console.error(ex.message));
        return search; 
    }
    catch(ex) {
        console.log('Unable to find user ', ex.message); 
    }
}