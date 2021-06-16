const models = require("../models/")
const transaction = models.transaction

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
exports.getTransaction = async (req,res) =>{
const resposta = await transaction.findAll()
res.status(200).json({resultado:resposta})

}