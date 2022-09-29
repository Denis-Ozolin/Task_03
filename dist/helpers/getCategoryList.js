"use strict";
exports.__esModule = true;
var getCategoryList = function (list) {
    var categoryList = [];
    list.forEach(function (item) {
        if (categoryList.includes(item.category)) {
            return;
        }
        else
            categoryList.push(item.category);
    });
    return categoryList;
};
exports["default"] = getCategoryList;
