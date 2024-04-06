const logoutController = (req, res) => {
  req.logout((err) => {
    console.error(err)
  });
  res.redirect('/');
}

module.exports = { logoutController }