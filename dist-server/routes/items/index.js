"use strict";

var _express = _interopRequireDefault(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

/* GET home page. */
router.get("/items", _controller["default"].getAllItem);
router.post("/items", _controller["default"].newItem);
router.patch("/items/:id", _controller["default"].updateItem);
router.get("/items/:id", _controller["default"].getItem);
router["delete"]("/items/:id", _controller["default"].deleteItem);
module.exports = router;