"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1["default"])();
var port = 3000;
app.use(express_1["default"].json());
app.use('/notes', routes_1["default"]);
app.use(function (req, res) {
    res.status(404).json({ message: 'Not Found' });
});
app.use(function (err, req, res, next) {
    var _a = err.status, status = _a === void 0 ? 500 : _a, _b = err.message, message = _b === void 0 ? 'Server error' : _b;
    res.status(status).json(message);
});
app.listen(port, function () {
    console.log("Server running. Use port: ".concat(port));
});
