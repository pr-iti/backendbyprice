 const mongoose = require('mongoose');
 const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    age:{
        type:Number,
        required:true,
    },
    course:{
        type:String,
        required:true,
        enum:["cse","mechanical","civil"],
    }
 });

 const student = mongoose .model('student',studentSchema);

 module.exports = student;



