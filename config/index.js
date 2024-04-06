const fs = require('fs');


const CONFIG = {
  APPLICATION: {
    PORT: 3000
  },
  SESSION: {
    secret: 'SECRET_123',
    resave: false,
    saveUninitialized: true
  },
  SAML_INFORMATIONS: {
    entryPoint: 'https://tester.onelogin.com/trust/saml2/http-post/sso/2fa08396-cfc4-4507-bd89-53810866594e',
    issuer: 'nodesamlauthentication',
    callbackUrl: 'https://localhost:3000/callback',
    cert: `certtest`
  },
  SSL_CREDENTIALS: {
    key: fs.readFileSync('localhost-key.pem'),
    cert: fs.readFileSync('localhost.pem')
  }
}

module.exports = { CONFIG }