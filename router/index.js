const { Router } = require("express");
const { logoutController } = require('../controllers/logout-controller');
const { indexController } = require('../controllers/index-controller');
const { failureController } = require('../controllers/failure-controller');
const passport = require("passport");

const applicationRouter = new Router();

applicationRouter.get('/failure', failureController);
applicationRouter.get('/', indexController);
applicationRouter.get('/logout', logoutController);

applicationRouter.get('/login', passport.authenticate('saml'));
applicationRouter.post('/callback', passport.authenticate('saml', { failureRedirect: '/failure', successRedirect: '/' }))

module.exports = { applicationRouter }


