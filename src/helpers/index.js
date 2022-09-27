const getNote = require('./getNote');
const addNote = require('./addNote');
const editById = require('./editNote');
const removeNote = require('./removeNote');
const updateNotes = require('./updateNotes');
const getAllNotes = require('./getAllNotes');
const getCurrentDate = require('./getCurrentDate');

module.exports = {
  getNote,
  addNote,
  editById,
  removeNote,
  updateNotes,
  getAllNotes,
  getCurrentDate,
};
