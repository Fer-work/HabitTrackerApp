const { getHome } = require("./homeController");
const { getActivitiesHome, postActivity } = require("./activitiesController");
const { getFinancesHome } = require("./financesController");
const { getHabitsHome } = require("./habitsController");
const { getScheduleHome } = require("./scheduleController");

module.exports = {
  getHome,
  getActivitiesHome,
  postActivity,
  getFinancesHome,
  getHabitsHome,
  getScheduleHome,
};
