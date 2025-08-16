const mongoose = require('mongoose');

//define person schema

const personaSchema = new mongoose.Schema({
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
    }

});

// creating person model;
const Person = mongoose.model('Person',personaSchema);
module.exports = Person;