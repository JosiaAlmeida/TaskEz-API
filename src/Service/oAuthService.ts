import express from 'express';
import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'

const app = express()

class oAuthService {
    async Google() {
        const clientId = process.env.CLIENT_ID
        const secretKey = process.env.SECRET_KEY
        app.use(passport.initialize())
        app.use(passport.session())

        passport.serializeUser(function (id, done) {

            done(null, id);

        });


        passport.deserializeUser(function (id, done) {

            done(null, id);

        });
        passport.use(new Strategy({

            clientID: process.env.CLIENT_ID,

            clientSecret: process.env.SECRET_KEY,

            callbackURL: 'http://localhost:3002/oAuth/sign/google'

        },
            async function (accessToken, refreshToken, profile, email, cb) {

                return cb(null, email.id);

            }

        ));
    }

    async Facebook() { }

} export { oAuthService }