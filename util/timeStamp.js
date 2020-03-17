
// New Date Generator
const date = new Date();

// Export Full Date
module.exports = () => {
    let stamp = date.getFullYear() + ' ' + (date.getMonth() + 1) + ' ' 
    + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes(); 
    return stamp; 
}

