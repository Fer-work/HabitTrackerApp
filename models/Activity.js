const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("activity", activitySchema);

module.exports = { Activity };
