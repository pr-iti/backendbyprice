// const fs = require("fs");

// fs.appendFile('/backendprince/greetings.txt','hii welcome to the new chapter of life',() => {
//     console.log("file is created");
// });

// fs.copyFile('/backendprince/greetings.txt','/backendprince/extra/check.txt', () => {
//     console.log("copied successfully");

// });

const express = require('express');
const app = express();// 
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


const db = require('./db');
const Person = require('./Models/person');
const menuItems = require('./Models/menu');
// const student = require('./Models/student')

const bodyParser = require('body-parser');
app.use(express.json());// req.body


// basic routes
app.get('/', function(req, res)  {
    res.send("response sent and welcome to hotels");
});



app.listen(3000,()=>{
    console.log("server is listening");
});

