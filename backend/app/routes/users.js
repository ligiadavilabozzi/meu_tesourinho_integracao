var express = require('express');
var router = express.Router();

const validateInput = require('../middlewares/validateInput')
const verifySignup = require('../middlewares/verifySignup')
const usersController = require('../controllers/usersController')
const jwtAuth = require('../middlewares/jwtAuth');



router.post("/", [verifySignup.checkUserExist, validateInput.dateValidation()], usersController.create)
router.delete("/", jwtAuth.verifyToken, usersController.deletar)
router.put("/", jwtAuth.verifyToken, usersController.update)

module.exports = router;