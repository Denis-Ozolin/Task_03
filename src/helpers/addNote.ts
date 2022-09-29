import { v4 } from 'uuid';
import operations from '.';


const addNote = async (body) => {
  const notes = await operations.getAllNotes();
  const newNote = {
    id: v4(),
    create: await operations.getCurrentDate(),
    active: true,
    ...body,
  };
  const updatedNotes = [...notes, newNote];
  await operations.updateNotes(updatedNotes);
  return newNote;
};

export default addNote;
