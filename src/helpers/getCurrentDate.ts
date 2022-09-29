const getCurrentDate = () => new Date().toDateString().split(' ').slice(1).join(' ');

export default getCurrentDate;