const addNote = require('./addNote');
const editNote = require('./editNote');
const getAllNotes = require('./getAllNotes');
const getCurrentDate = require('./getCurrentDate');
const getNote = require('./getNote');
const removeNote = require('./removeNote');
const updatesNotes = require('./updateNotes');
const getCategoryList = require('./getCategoryList');
const createStatsObj = require('./createStatsObj');
const getNoteAmountOnCategory = require('./getNoteAmountOnCategory');
const getNotesStats = require('./getNotesStats');

module.exports = {
  addNote,
  editNote,
  getAllNotes,
  getCurrentDate,
  getNote,
  removeNote,
  updatesNotes,
  getCategoryList,
  createStatsObj,
  getNoteAmountOnCategory,
  getNotesStats,
};
