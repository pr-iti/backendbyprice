const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['spicy','sweet','sour'],
        required:true

    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default: 0,
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});
const menus = mongoose.model('menus',MenuItemSchema);
module.exports = menus;