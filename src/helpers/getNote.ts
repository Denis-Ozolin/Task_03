import operations from '.';

const getNote = async (noteId) => {
  const notes = await operations.getAllNotes();
  const result = notes.find(({ id }) => String(id) === String(noteId));
  if (!result) {
    return null;
  }
  return result;
};

export default getNote;
