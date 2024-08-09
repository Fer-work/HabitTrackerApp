const express = require("express");
const router = express.Router();

// Import controllers
const { getHome } = require("../controllers/homeController");

// Set up routes
router.get("/", getHome);

module.exports = router;
