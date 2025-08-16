// const fs = require("fs");

// fs.appendFile('/backendprince/greetings.txt','hii welcome to the new chapter of life',() => {
//     console.log("file is created");
// });

// fs.copyFile('/backendprince/greetings.txt','/backendprince/extra/check.txt', () => {
//     console.log("copied successfully");

// });

const express = require('express');
const app = express();// 
// const _ = require('lodash');
const db = require('./db');
const Person = require('./Models/person')
// const student = require('./Models/student')

const bodyParser = require('body-parser');
app.use(bodyParser.json());// req.body

// const port = 5500;

// basic routes
app.get('/', function(req, res)  {
    res.send("response sent and welcome to hotels");
});


app.get('/person', (req,res) =>{
    res.send('welcome to the employees haul');
});

app.post('/person',(req,res) => {

    const data = req.body
    const newPerson = new Person(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;

    //------- this call back with save is not in use.
    newPerson.save((error, person) => {
        if(error){
            console.log("'Error in saving person:",error);
            res.status(500).json({error:'internal server error'})
        }else{
            console.log('data saved successfully');
            res.status(200).json(person);
        }

    })


});
app.get('/chef', (req,res) =>{
    res.send('welcome to the chicken chef haul');
});
app.get('/daal', (req,res) =>{
    var specialdaal = {
        name:'daal',
        pulse:'masoor',
        taste:'good',
        health:'beneficial'

    };
    res.send(`welcome here is recipe ${specialdaal}`);
});

app.post('/student',(req,res) =>{

    res.send('response sent and data is saved');
})

// person

// app.post('/student', async(req,res) => {
      
//     try{
//         var studentData = {
//         "name":"priti",
//         "age":21,
//         "course":"cse",
//         "email": "priti@gmail.com"
//      };
//      const newstudent = new student(studentData);
//      const response = await newstudent.save();
//       console.log("data saved");
//       res.status(200).json(response);


//     }catch(err){
//         console.log(err);
//         res.status(500).json({err:'internal server js'});

//     }
  
// });

//start server

// app.listen(port,() => {
//     console.log(`app listening on ${port}`);
// });
app.listen(3000,()=>{
    console.log("server is listening");
});

