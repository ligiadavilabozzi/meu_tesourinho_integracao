const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const search = require('../db/userQuerys')
const config = require('../config/auth.config')
const jwt = require('jsonwebtoken')

const authUser = async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  const usuarioValidation = await search.searchUsers(email)

  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ messenge: errors.errors })
  }

  if (!usuarioValidation) {
    res.status(404).json({ messenge: "Email not found!" })
  }

  if (!bcrypt.compareSync(password, usuarioValidation.password)) {
    return res.status(401).json({
      acessToken: null,
      messenge: "invalid password"
    })
  }

  let token = jwt.sign({ id: usuarioValidation.id }, config.secret, {
    expiresIn: 25000
  });


  return res.status(200).json({
    message: "successfully connected",
    user: usuarioValidation.username,
    email: usuarioValidation.email,
    acessToken: token
  })
}




module.exports = {
  authUser,
};