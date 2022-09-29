var express = require('express');
var notesRouter = require('./routes');
var app = express();
var port = 3000;
app.use(express.json());
app.use('/notes', notesRouter);
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
