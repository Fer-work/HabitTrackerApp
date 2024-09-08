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

// Import middleware
const { activityValidator } = require("../middleware/activityValidator");

// Set up routes
router.get("/", getHome);
router
  .get("/activities", getActivitiesHome)
  .post("/activities", activityValidator, postActivity);
router.get("/finances", getFinancesHome);
router.get("/habits", getHabitsHome);
router.get("/schedule", getScheduleHome);

module.exports = router;
