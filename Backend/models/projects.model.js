const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    maxLength: 60,
    required: true,
  },
  description: {
    type: String,
    maxLength: 1000,
    required: true,
  },
  github: {
    type: String,
    maxLength: 200,
  },
  link: {
    type: String,
    maxLength: 200,
  },
},{
	timestamps:true
});

module.exports=mongoose.model('Project',ProjectSchema)
