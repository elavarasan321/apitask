"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _items = _interopRequireDefault(require("../../models/items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

/* GET home page. */
var getAllItem = function getAllItem(req, res, next) {
  _items["default"].find().then(function (result) {
    res.status(200).json({
      userdata: result
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

var newItem = function newItem(req, res, next) {
  var item = new _items["default"]({
    id: req.body.id,
    itemname: req.body.itemname,
    price: req.body.price,
    description: req.body.description
  });

  try {
    item = item.save(); //redirect for particulr data

    res.send("created success");
  } catch (err) {
    console.log(err);
  }
};

var getItem = function getItem(req, res, next) {
  _items["default"].findOne({
    id: req.params.id
  }).then(function (result) {
    res.status(200).json({
      userdata: result
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

var updateItem = function updateItem(req, res, next) {
  console.log(req.params.id);

  _items["default"].findOneAndUpdate({
    id: req.params.id
  }, {
    $set: {
      itemname: req.body.itemname
    }
  }).then(function (result) {
    res.status(200).json({
      userdata: "updated"
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

var deleteItem = function deleteItem(req, res, next) {
  console.log(req.params.id);

  _items["default"].findOneAndDelete({
    id: req.params.id
  }).then(function (result) {
    res.status(200).json({
      res: res
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

var _default = {
  getAllItem: getAllItem,
  newItem: newItem,
  deleteItem: deleteItem,
  updateItem: updateItem,
  getItem: getItem
};
exports["default"] = _default;