const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechSchema = new Schema({
  title: {
    type: String,
    maxLength: 60,
    required: true,
  },
  progress: {
    type: Number,
    maxLength: 5,
    required:true,
  },
  image: {
    type: String,
    maxLength:200,
    required: true,
  }

},{
	timestamps:true
});

module.exports=mongoose.model('Tech',TechSchema)
