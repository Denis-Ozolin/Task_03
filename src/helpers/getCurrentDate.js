const getCurrentDate = () => new Date().toDateString().split(' ').slice(1).join(' ');

module.exports = getCurrentDate;