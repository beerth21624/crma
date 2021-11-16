const mongoose = require('mongoose');

const FileSchema = mongoose.Schema(
  {
    FileName: {
      type: String,
      require: true,
    },
    FilePathName: {
      type: String,
      require: true,
    },
    FileDocName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('File', FileSchema);
