const express = require('express');
const menuItems = require('../Models/menu');
const router = express.Router();

//post routers of menu

router.post('/',async(req,res) => {
    try{
     const data = req.body
     //for check
     //console.log("Request body:", req.body);


     const  newmenu= new menuItems (data);
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


// ger routers to menu
router.get('/',async(req,res)=> {

    try{
        const data = await menuItems.find();

        
        //const data = await Person.find();

    
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log("error occured",err);
        res.status(500).json({err:'internal server error'});
    }
    
});

router.get('/:taste',async(req,res)=> {

    try{
         const menuis = req.params.taste;
        if(menuis == 'spicy' || menuis == 'sweet' || menuis =='sour'){
           
        const item = await menuItems.find({taste:menuis});

        console.log("data fetched");
        res.status(200).json(item);

        }else{
              res.status(404).json({error:'Internal server error'});

        }
    }catch(err){
        console.log("error occured",err);
        res.status(500).json({err:'internal server error'});
    }
    
});

module.exports = router;
