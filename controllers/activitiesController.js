const { validationResult } = require("express-validator");
const { Activity } = require("../models/Activity");

const getActivitiesHome = async (req, res) => {
  try {
    const now = new Date();

    // Calculate the start and end of the current week (Sunday to Saturday)
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const endOfWeek = new Date(now.setDate(startOfWeek.getDate() + 6));
    console.log(`This is the value for the start of the week: ${startOfWeek}`);
    console.log(`This is the value for the end of the week: ${endOfWeek}`);

    // Query for activities within the current week
    const activities = await Activity.find({
      date: {
        $gte: startOfWeek,
        $lte: endOfWeek,
      },
    }).sort({ date: 1 });
    console.log(`This is query: ${activities}`);

    // Organize activities by day of the week
    const organizedActivities = activities.reduce((acc, activity) => {
      const dayOfWeek = new Date(activity.date).toLocaleDateString("en-US", {
        weekday: "long",
      });
      if (!acc[dayOfWeek]) {
        acc[dayOfWeek] = [];
      }
      acc[dayOfWeek].push(activity);
      return acc;
    }, {});

    // Render the page with the organized activities
    res.render("pages/activities", { organizedActivities });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const postActivity = (req, res) => {
  let errors = validationResult(req);

  // If there are errors
  if (!errors.isEmpty()) {
    res.render("pages/activities", {
      errors: errors.array(),
    });
  } else {
    let data = {
      description: req.body.description,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.startTime,
    };

    let newActivity = new Activity(data);

    newActivity
      .save()
      .then(() => {
        console.log(
          `${data.date} - Activity Saved!\nHere is the data: ${JSON.stringify(
            data
          )}`
        );
      })
      .catch((error) => {
        console.log(error.message);
      });

    res.render("pages/activities", {
      data,
    });
  }
};

module.exports = { getActivitiesHome, postActivity };
