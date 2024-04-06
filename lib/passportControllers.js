

const passportControllers = {
  serializeUserController : (user, done) => {
    done(null, user);
  },
  deserializeUserController : (user, done) => {
    done(null, user);
  }
}

module.exports = { passportControllers }