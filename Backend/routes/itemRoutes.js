const express = require("express");
const { createItem, getItems, deleteItem } = require("../controller/userController");
const router = express.Router();

router.post("/", createItem);
router.get("/", getItems);
router.delete("/:id", deleteItem);

module.exports = router;
