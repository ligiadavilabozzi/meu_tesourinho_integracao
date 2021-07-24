const { check, validationResult, body } = require("express-validator");

const auth = (req, res, next) => {
    req.session.userSession ? next() : res.redirect("/login");
};

const dateValidation = () => {
    let validations = [
        check("email").isEmail().withMessage("Email inválido"),
        check("password")
            .isLength({ min: 3 })
            .withMessage("Senha deve conter mínimo 6 caracteres"),
        body("confirmarSenha").custom((value, { req }) => {
            if (value !== req.body.senha) {
                throw new Error("Campo senha e confimar senha não coincidem");
            }
            return true;
        }),
    ];
    return validations;
};

const inputsValidationSignin = () => {
    let validations = [
        check("email").isEmail().withMessage("Email inválido"),
        check("password")
            .isLength({ min: 3 })
            .withMessage("Senha deve conter mínimo 6 caracteres"),
    ];
    return validations;
};

module.exports = {
    auth,
    dateValidation,
    inputsValidationSignin,
};