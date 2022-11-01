const express = require("express");
const router = express.Router();

const controller = require("../controllers/inventoryController")
//router.use("/inventory", controller.getAllInventory);
router.get("/", controller.getAllInventory);
module.exports = router;