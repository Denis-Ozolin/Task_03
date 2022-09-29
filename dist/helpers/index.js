"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var addNote_1 = __importDefault(require("./addNote"));
var editNote_1 = __importDefault(require("./editNote"));
var getAllNotes_1 = __importDefault(require("./getAllNotes"));
var getCurrentDate_1 = __importDefault(require("./getCurrentDate"));
var getNote_1 = __importDefault(require("./getNote"));
var removeNote_1 = __importDefault(require("./removeNote"));
var updateNotes_1 = __importDefault(require("./updateNotes"));
var getCategoryList_1 = __importDefault(require("./getCategoryList"));
var createStatsObj_1 = __importDefault(require("./createStatsObj"));
var getNoteAmountOnCategory_1 = __importDefault(require("./getNoteAmountOnCategory"));
var getNotesStats_1 = __importDefault(require("./getNotesStats"));
var checkData_1 = __importDefault(require("./checkData"));
var operations = {
    addNote: addNote_1["default"],
    editNote: editNote_1["default"],
    getAllNotes: getAllNotes_1["default"],
    getCurrentDate: getCurrentDate_1["default"],
    getNote: getNote_1["default"],
    removeNote: removeNote_1["default"],
    updateNotes: updateNotes_1["default"],
    getCategoryList: getCategoryList_1["default"],
    createStatsObj: createStatsObj_1["default"],
    getNoteAmountOnCategory: getNoteAmountOnCategory_1["default"],
    getNotesStats: getNotesStats_1["default"],
    checkData: checkData_1["default"]
};
exports["default"] = operations;
