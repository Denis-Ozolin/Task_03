"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var notesPath = path_1["default"].join(__dirname, 'notes.json');
exports["default"] = notesPath;
