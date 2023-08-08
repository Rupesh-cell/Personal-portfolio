const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProjectSchema = new Schema(
    {
        title:{
            type:String , 
            maxLength:60,
            required:true,
        }
        
    }
)