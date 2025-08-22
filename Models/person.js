const mongoose = require('mongoose');

//define person schema

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    age:{type:Number,required:true},
    work:{type:String,required:true,enum:['chef','manager','waiter']},
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    address:{
        type:String
    },
    salary:{
        type:Number
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

// creating person model;
const person = mongoose.model('Person',personSchema);
module.exports = person;