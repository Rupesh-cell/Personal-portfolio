const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  email: {
    type: String,
    maxLength: 50,
  },
  message: {
    type: String,
    maxLength: 300,
  }
},{
	timestamps:true
});

module.exports=mongoose.model('Contact',ContactSchema)
