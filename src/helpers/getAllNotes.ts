import fs from 'fs/promises';
import notesPath from '../repositories';

const getAllNotes = async () => {
  const data = await fs.readFile(notesPath);
  
  const notes = JSON.parse(String(data));
  console.log(notes);
  
  return notes;
};

export default getAllNotes;
