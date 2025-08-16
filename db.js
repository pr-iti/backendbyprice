// const mongoose = require('mongoose');

//mongodb URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// set up mongodb connection
// mongoose.connect(mongoURL,{
//     useNewUriParser : true,
//     useUnifiedtopology: true
// })
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hotels")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


const db = mongoose.connection;

//event listeners for mongodb connection

// db.on('connected',()=>{
//     console.log(`mongodb connected to server`);
// });
// db.on('disconnected',()=>{
//     console.log(`mongodb disconnected to server`);
// });



// mongoose.connect('mongodb://127.0.0.1:27017/college')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ Connection error:', err));


// mongoose.connect(mongoURL,{useNewurlParser:true,useUnifiedTopology:true});

// const  db = mongoose.connection;

module.exports = db;
