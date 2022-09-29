const getNoteAmountOnCategory = (category, notes) => {
  const categoryNotes = notes.filter((note) => note.category === category);
  const activeNotes = categoryNotes.filter((note) => note.active);
  const archiveNotes = categoryNotes.filter((note) => !note.active);

  return {
    active: activeNotes.length,
    archive: archiveNotes.length,
  };
};

export default getNoteAmountOnCategory;
