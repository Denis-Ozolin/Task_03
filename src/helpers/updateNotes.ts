import fs from 'fs/promises';
import notesPath from '../repositories';

const updateNotes = async (notes) => {
  await fs.writeFile(notesPath, JSON.stringify(notes));
};

export default updateNotes;
