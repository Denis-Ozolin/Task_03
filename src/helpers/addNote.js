const { v4 } = require('uuid');
const operations = require('../helpers');

const addNote = async (body) => {
  const notes = await operations.getAllNotes();
  const newNote = {
    id: v4(),
    create: operations.getCurrentDate(),
    active: true,
    ...body,
  };
  const updatedNotes = [...notes, newNote];
  await operations.updateNotes(updatedNotes);
  return newNote;
};

module.exports = addNote;
