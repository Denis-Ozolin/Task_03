"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var getAll_1 = __importDefault(require("./getAll"));
var getById_1 = __importDefault(require("./getById"));
var add_1 = __importDefault(require("./add"));
var editById_1 = __importDefault(require("./editById"));
var removeById_1 = __importDefault(require("./removeById"));
var getStats_1 = __importDefault(require("./getStats"));
var controllers = {
    getAll: getAll_1["default"],
    getById: getById_1["default"],
    add: add_1["default"],
    editById: editById_1["default"],
    removeById: removeById_1["default"],
    getStats: getStats_1["default"]
};
exports["default"] = controllers;
