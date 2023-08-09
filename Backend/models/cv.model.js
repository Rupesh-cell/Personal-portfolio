const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CvSchema = new Schema({
  Cv: {
    type: String,
    maxLength: 60,
    required: true,
  },
 
},{
	timestamps:true
});

module.exports=mongoose.model('Cv',CvSchema)
