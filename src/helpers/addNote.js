const { v4 } = require('uuid');
// const operations = require('./index');
const getAllNotes = require('./getAllNotes');
const getCurrentDate = require('./getCurrentDate');
const updateNotes = require('./updateNotes');

const addNote = async (body) => {
  const notes = await getAllNotes();
  const newNote = {
    id: v4(),
    create: getCurrentDate(),
    active: true,
    ...body,
  };
  const updatedNotes = [...notes, newNote];
  await updateNotes(updatedNotes);
  return newNote;
};

module.exports = addNote;
