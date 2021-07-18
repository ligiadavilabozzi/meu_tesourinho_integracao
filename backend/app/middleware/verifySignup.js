const search = require("../db/userQuerys");

const checkUserExist = async (req, res, next) => {
    await search.searchUsers(req.body.email).then((user) => {
        if (user) {
            res.status(400).json({ message: "User already registered!" });
            return;
        }
        next();
    });
};

const checkUserCorrect = async (req, res, next) => {
    await search.searchUsers(req.body.email).then((user) => {
        if (!user) {
            res.status(400).json({ message: "User not registered!" });
            return;
        }
    });
    next();
};

module.exports = {
    checkUserExist,
    checkUserCorrect,
};