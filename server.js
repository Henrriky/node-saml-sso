const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy;
const ejs = require('ejs');
const https = require('https');

const { CONFIG } = require('./config');
const { passportControllers } = require('./lib/passportControllers');
const { applicationRouter } = require('./router');
const fs = require('fs');

const app = express();
app.use(session(CONFIG.SESSION));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

passport.use(new SamlStrategy(CONFIG.SAML_INFORMATIONS, (profile, done) => done(null, profile)));
passport.serializeUser(passportControllers.serializeUserController);
passport.deserializeUser(passportControllers.deserializeUserController);

app.use(applicationRouter)

const httpsServer = https.createServer(CONFIG.SSL_CREDENTIALS, app)
httpsServer.listen(CONFIG.APPLICATION.PORT, () => console.log(`Servidor rodando em https://localhost:${CONFIG.APPLICATION.PORT}`));
