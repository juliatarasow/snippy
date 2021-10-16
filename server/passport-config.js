const User = require('./models/User');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
function initialize(passport) {
   
    passport.use('jwt', new JWTStrategy({
        
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET_KEY
    },
    function(jwtPayload, done){
        console.log(jwtPayload)
        return User.findById(jwtPayload.sub)
        .then(user => {return done(null, user)})
        .catch(err => {return done(err)})
    }
    ))

}

module.exports = initialize;