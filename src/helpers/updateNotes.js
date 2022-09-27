const fs = require('fs/promises');
const notesPath = require('../repositories');

const updateNotes = async (notes) => {
  await fs.writeFile(notesPath, JSON.stringify(notes));
};

module.exports = updateNotes;
