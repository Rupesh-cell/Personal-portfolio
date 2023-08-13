const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CvSchema = new Schema({
  CvUrl: {
    type: String,
    maxLength: 200,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Cv', CvSchema);
