const mongoose = require('mongoose');

const ActivitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    pathName: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', ActivitySchema);
