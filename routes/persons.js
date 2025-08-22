const express = require('express');
const router = express.Router();
//--------------
const Person = require('./../Models/person');
const { findByIdAndUpdate } = require('../Models/menu');
const {jwtAuthMiddleware,generateToken} = require('./../jwt');

// post routes to add person
router.post('/signup',async(req,res) => {
    try{
     const data = req.body
    const newPerson = new Person(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;

    //------- this call back with save is not in use.
    const response = await newPerson.save();
    console.log('data saved',response);
    //---------------------------------------------
    const payload = {
        id:response.id,
        username:response.username
    }
    const token = generateToken(payload);
    console.log("Token is :",token);

    res.status(200).json({response:response, token :token});

    }catch(err){
        console.log('error in saving data',err);
       res.status(500).json({error:'Internal Server Error'});

    }
});
//login route
router.post('/login',async(req,res) => {

    try{
        // extract username,password from request body
        const {username,password} = req.body; 

        //find the user by username
        const user = await Person.findOne({username:username});
        //if user does not exist or password does not match , return error
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error:'Invalid username or password'});
        }
        // generate token
        const payload ={
            id : user.id,
            username : user.username
        }
        // return token as response
        const token = generateToken(payload);
        res.json({token});   

} catch(err){

    
    console.error(err);
    res.status(500).json({error:'Internal Server error'});

    }
});

// get routes to get  person
router.get('/', async(req,res) =>{
   try{
    const data = await Person.find();

    console.log('data fetched',data);
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
});
router.put('/:id',async(req,res) =>{

    try{
        const person_id = req.params.id;
        const data= req.body;

        const updateddata  = await Person.findByIdAndUpdate(person_id,data,{
            new:true,// return the updated document
            runValidators:true, // run mongoose validation
        });
        
        if(!updateddata){
            console.log("error in updation or invalid id");
            res.status(404).json({err:'not found'});
        }else{
             console.log("succefully updated");
             res.status(200).json(updateddata);
        }
       
    }catch(err){
         console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
});

router.delete('/:id', async (req, res) => {
  try {
    const person_id = req.params.id; // extract ID
    const response = await Person.findByIdAndDelete(person_id);

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log("Successfully deleted record:", response);
    res.status(200).json({ message: 'Person deleted successfully', deleted: response });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// profile for user
router.get('/profile',jwtAuthMiddleware,async(req,res) => {

    try{
        const userData = req.user;
        console.log("user Data ", userData);
        const userId = userData.id;

        const user = await Person.findById(userId);

        res.status(200).json({user});

    }catch(err){
        console.error(err);
    res.status(500).json({ error: 'Internal Server    Error' });
    }
});

module.exports = router;
