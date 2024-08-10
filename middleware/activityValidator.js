const { check } = require("express-validator");

const activityValidator = [
  check("description").notEmpty().withMessage("Please enter a description"),
  check("date").isDate().withMessage("Please enter a valid date"),
  check("startTime").isTime().withMessage("Please enter a valid time"),
];

module.exports = {
  activityValidator,
};
