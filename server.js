
const express = require('express');
const app = express();

// Middleware function
const logRequest = (req,res,next )=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();// move to next  phase
}
app.use(logRequest);
const port = process.env.PORT || 3000;

const db = require('./db');

const passport = require('./auth');

require('dotenv').config();
const Person = require('./Models/person');
const menuItems = require('./Models/menu');
const personRoutes = require('./routes/persons');
const menuItemsRoutes = require('./routes/menus');
const localAuthMiddleware = passport.authenticate('local',{session:false});
// const bodyParser = require('body-parser');
// const menus = require('./Models/menu');
app.use(express.json());// req.body
app.use('/person', personRoutes);
app.use('/menuItems',localAuthMiddleware, menuItemsRoutes);
//--------------------------------------------------------
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;


// const student = require('./Models/student')

// use middleware for logging time
// 
// app.use(logRequest);

// basic routes
app.get('/', function(req, res)  {
    res.send("response sent and welcome to hotels");
});



//const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

