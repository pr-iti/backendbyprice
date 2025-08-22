const passport = require('passport');
const person = require('./Models/person');

const localPassport = require('passport-local').Strategy;
passport.use(passport.initialize());

passport.use(new LocalStrategy (async(username,password,done)=>{

    try{
        console.log('received crendentials', username,password);

        const user = await person.find({username:username});

        if(!user)
            return done(error,false,{message:"incorrect username"});
        const isPasswordmatch = user.password === password?true:false;

        if(isPasswordmatch){
            return done(null,user);

        }
        else{return done(null,false,{message:"incorrect password"})};


        
    }catch(err){ return done(err);}

}));

module.exports = passport;