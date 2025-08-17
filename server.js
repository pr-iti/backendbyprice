
const express = require('express');
const app = express();

const db = require('./db');
const Person = require('./Models/person');
const menuItems = require('./Models/menu');
const personRoutes = require('./routes/persons');
const menuItemsRoutes = require('./routes/menus');

const bodyParser = require('body-parser');
// const menus = require('./Models/menu');
app.use(express.json());// req.body
app.use('/person', personRoutes);
app.use('/menuItems', menuItemsRoutes);

// const student = require('./Models/student')




// basic routes
app.get('/', function(req, res)  {
    res.send("response sent and welcome to hotels");
});



app.listen(3000,()=>{
    console.log("server is listening");
});

