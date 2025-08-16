// const fs = require("fs");

// fs.appendFile('/backendprince/greetings.txt','hii welcome to the new chapter of life',() => {
//     console.log("file is created");
// });

// fs.copyFile('/backendprince/greetings.txt','/backendprince/extra/check.txt', () => {
//     console.log("copied successfully");

// });

const express = require('express');
const app = express();// 
//app.use(express.json());

// const _ = require('lodash');
const db = require('./db');
const Person = require('./Models/person');
const menuItems = require('./Models/menu');
// const student = require('./Models/student')

const bodyParser = require('body-parser');
app.use(express.json());// req.body

// const port = 5500;

// basic routes
app.get('/', function(req, res)  {
    res.send("response sent and welcome to hotels");
});


//=-=-=-=-=-=--=-=-=-=-=-=-=--=-==--=-=-=-=-=-=-=-=-=-=-=-=-=-==-

app.post('/person',async(req,res) => {
    try{
     const data = req.body
    const newPerson = new Person(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;

    //------- this call back with save is not in use.
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);

    }catch(err){
        console.log('error in saving data',err);
       res.status(500).json({error:'Internal Server Error'});

    }


app.get('/person', async(req,res) =>{
   try{
    const data = await Person.find();

    console.log('data fetched');
    res.status(200).json(data);

   }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});


   }
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++
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


//=========================menu===========


    app.post('/menu',async(req,res) => {
    try{
     const data = req.body
    const newmenu = new menuItems(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;

    //------- this call back with save is not in use.
    const response = await newmenu.save();
    console.log('data saved');
    res.status(200).json(response);

    }catch(err){
        console.log('error in saving data',err);
       res.status(500).json({error:'Internal Server Error'});

    }  
    // newPerson.name = data.name;
    // newPerson.age = data.age;

    //------- this call back with save is not in use.

});

app.get('/menu',async(req,res)=> {

    try{
        console.log("data fetched",);
        res.status(200).json(menu);
    }catch(err){
        console.log("erro occured",err);
        res.status(200).json({err:'internal server error'});
    }
    
})
///---------------------------------------------------------////
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

