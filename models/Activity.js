const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("activity", activitySchema);

module.exports = { Activity };
