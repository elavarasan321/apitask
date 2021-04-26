import express from "express";
const router = express.Router();

import controller from "./controller";

/* GET home page. */
router.get("/items", controller.getAllItem );
router.post("/items", controller.newItem );
router.patch("/items/:id", controller.updateItem );
router.get("/items/:id", controller.getItem );
router.delete("/items/:id", controller.deleteItem );


module.exports = router;
