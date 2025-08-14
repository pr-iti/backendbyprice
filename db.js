const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:5500/college';

mongoose.connect(mongoURL,{useNewurlParser:true,useUnifiedTopology:true});

const  db = mongoose.connection;

module.exports = db;
