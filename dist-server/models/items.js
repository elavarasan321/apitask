"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemSchema = new _mongoose["default"].Schema({
  id: {
    type: Number,
    max: 10,
    required: true
  },
  itemname: {
    type: String,
    max: 255,
    required: true
  },
  price: {
    type: String,
    max: 255,
    required: true
  },
  description: {
    type: String,
    max: 255,
    required: true
  }
});

var Items = _mongoose["default"].model("items", itemSchema);

var _default = Items;
exports["default"] = _default;