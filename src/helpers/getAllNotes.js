const fs = require('fs/promises');
const notesPath = require('../repositories');

const getAllNotes = async () => {
  const data = await fs.readFile(notesPath);
  const notes = JSON.parse(data);
  return notes;
};

module.exports = getAllNotes;
