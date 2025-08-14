// const fs = require("fs");

// fs.appendFile('/backendprince/greetings.txt','hii welcome to the new chapter of life',() => {
//     console.log("file is created");
// });

// fs.copyFile('/backendprince/greetings.txt','/backendprince/extra/check.txt', () => {
//     console.log("copied successfully");

// });

const express = require('express');
const app = express();
const _ = require('lodash');
const db = require('./db');

const port = 5500;

// basic routes
app.get('/', (req, res) => {
    res.send("response sent");
});

// person

app.post('/student', (req,res) => {
      
    var studentData = {
        "name":"priti",
        "age":21
    };
    
});

//start server

app.listen(port,() => {
    console.log(`app listening on ${port}`);
});


