const failureController = (req, res) => {
  res.send('Falha na autenticação');
}

module.exports = { failureController }