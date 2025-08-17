const express = require('express');
const router = express.Router();
//--------------
const Person = require('../Models/person');

// post routes to add person
router.post('/',async(req,res) => {
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
router.get('/', async(req,res) =>{
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
router.get('/:workType',async(req,res) =>{
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
module.exports = router;
