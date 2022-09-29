"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var services_1 = __importDefault(require("../services"));
var router = express_1["default"].Router();
router.get('/', services_1["default"].getAll);
router.get('/stats', services_1["default"].getStats);
router.get('/:id', services_1["default"].getById);
router.post('/', services_1["default"].add);
router.patch('/:id', services_1["default"].editById);
router["delete"]('/:id', services_1["default"].removeById);
exports["default"] = router;
