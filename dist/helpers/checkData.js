"use strict";
exports.__esModule = true;
var categories_1 = require("../repositories/categories");
var checkData = function (obj) {
    var errorMsg = '';
    if (obj.category && !obj.category || !categories_1.baseCategories.includes(obj.category)) {
        errorMsg = "Wrong category";
        return errorMsg;
    }
    if (obj.active && (typeof obj.active) !== (typeof true)) {
        errorMsg = "Incorrect archiving";
        return errorMsg;
    }
    if (obj.content === "") {
        errorMsg = "Сontent is empty";
        return errorMsg;
    }
    return null;
};
exports["default"] = checkData;
