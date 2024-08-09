const express = require("express");
const router = express.Router();

// Import controllers
const {
  getHome,
  getActivitiesHome,
  getFinancesHome,
  getHabitsHome,
  getScheduleHome,
  postActivity,
} = require("../controllers/index");

// Set up routes
router.get("/", getHome);
router.get("/activities", getActivitiesHome).post("/activities", postActivity);
router.get("/finances", getFinancesHome);
router.get("/habits", getHabitsHome);
router.get("/schedule", getScheduleHome);

module.exports = router;
