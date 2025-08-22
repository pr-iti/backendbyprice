// const mongoose = require('mongoose');

//mongodb URL
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
//  const mongoURL = "mongodb+srv://priti:@priti0707@cluster0.nuvo5b8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 // mongodb+srv://priti:<db_password>@cluster0.nuvo5b8.mongodb.net/
 // mongodb+srv://priti:<db_password>@cluster0.nuvo5b8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// set up mongodb connection
// mongoose.connect(mongoURL,{
//     useNewUriParser : true,
//     useUnifiedtopology: true
// // })
// const mongoose = require("mongoose");

const mongoose = require('mongoose');
//const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

require('dotenv').config();
 const mongoURL = process.env.DB_URLlocal;
  //const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));


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
