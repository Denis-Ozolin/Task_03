const getAllNotes = require('./getAllNotes');

const getNote = async (noteId) => {
  const notes = await getAllNotes();
  const result = notes.find(({ id }) => String(id) === String(noteId));
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getNote;
