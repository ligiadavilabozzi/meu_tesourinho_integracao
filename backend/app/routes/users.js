var express = require('express');
var router = express.Router();

const validateInput = require('../middleware/validateInput')
const verifySignup = require('../middleware/verifySignup')
const usersController = require('../controllers/userController')
const jwtAuth = require('../middleware/authJwt');



router.post("/", [verifySignup.checkUserExist, validateInput.dateValidation()], usersController.create)
router.delete("/", jwtAuth.verifyToken, usersController.deletar)
router.put("/", jwtAuth.verifyToken, usersController.update)
router.get('/',usersController.getUser);

module.exports = router;