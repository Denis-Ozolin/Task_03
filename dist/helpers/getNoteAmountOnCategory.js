"use strict";
exports.__esModule = true;
var getNoteAmountOnCategory = function (category, notes) {
    var categoryNotes = notes.filter(function (note) { return note.category === category; });
    var activeNotes = categoryNotes.filter(function (note) { return note.active; });
    var archiveNotes = categoryNotes.filter(function (note) { return !note.active; });
    return {
        active: activeNotes.length,
        archive: archiveNotes.length
    };
};
exports["default"] = getNoteAmountOnCategory;
