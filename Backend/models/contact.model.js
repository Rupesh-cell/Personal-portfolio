const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  Name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  Email: {
    type: String,
    maxLength: 50,
  },
  Message: {
    type: String,
    maxLength: 300,
  }
},{
	timestamps:true
});

module.exports=mongoose.model('Contact',ContactSchema)
