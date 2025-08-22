const passport = require('passport');
const person = require('./Models/person');
const LocalStrategy = require('passport-local').Strategy;  // ✅ use this, not localPassport

passport.use(passport.initialize());

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    console.log('received credentials', username, password);

    const user = await person.findOne({ username: username }); // ✅ better use findOne
    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }

    const isPasswordMatch = user.password === password;
    if (!isPasswordMatch) {
      return done(null, false, { message: "Incorrect password" });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));


module.exports = passport;
