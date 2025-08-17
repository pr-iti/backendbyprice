const express = require('express');
const router = express.Router();

//post routers of menu

    app.post('/menu',async(req,res) => {
    try{
     const data = req.body()
    const  newmenu= new menuItems(data);
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
app.get('/menu',async(req,res)=> {

    try{
        const item = await menuItems.find();

        console.log("data fetched");
        res.status(200).json(item);
    }catch(err){
        console.log("error occured",err);
        res.status(500).json({err:'internal server error'});
    }
    
})

