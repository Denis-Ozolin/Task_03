const getAllNotes = require('./getAllNotes');
const updateNotes = require('./updateNotes');

const removeNote = async (noteId) => {
  const notes = await getAllNotes();
  const idx = notes.findIndex(({ id }) => String(id) === String(noteId));
  if (idx === -1) {
    return null;
  }
  const updatedNotes = notes.filter((_, index) => index !== idx);
  await updateNotes(updatedNotes);
  return notes[idx];
};

module.exports = removeNote;
