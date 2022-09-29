const { v4 } = require('uuid');
const getAllNotes = require('./getAllNotes');
const getCurrentDate = require('./getCurrentDate');
const updateNotes = require('./updateNotes');

const addNote = async (body) => {
  const notes = await getAllNotes();
  const newNote = {
    id: v4(),
    create: await getCurrentDate(),
    active: true,
    ...body,
  };
  const updatedNotes = [...notes, newNote];
  await updateNotes(updatedNotes);
  return newNote;
};

module.exports = addNote;
