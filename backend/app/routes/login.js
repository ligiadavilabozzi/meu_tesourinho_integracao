var express = require('express');
var router = express.Router();
const validateInput = require('../middleware/validateInput')
var loginController = require('../controllers/loginController')

router.post('/', validateInput.inputsValidationSignin(), loginController.authUser);
router.get('/', validateInput.inputsValidationSignin(), loginController.authUser);

module.exports = router;