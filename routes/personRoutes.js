const express = require('express');
const router = express.Router();

// post routes to add person
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
});

// get routes to get  person
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
//---------------------------------------
app.get('/person/:workType',async(req,res) =>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType =='manager' || workType =='waiter'){

            const response = await Person.find({work:workType});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Internal server error'});
        }


    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})