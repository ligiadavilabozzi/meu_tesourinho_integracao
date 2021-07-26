const { validationResult } = require('express-validator');
const { User } = require('../models');
const bcrypt = require('bcrypt')
const userQuerys = require('../db/userQuerys')


const create = async (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
        const { username, email, password } = req.body;
        let newUser = {
            username,
            email,
            password: bcrypt.hashSync(password,10),
        };
        await User.create(newUser)
        res.status(201).json({ message: "User successfully created!" });
    }
    res.status(400).json({ messenger: errors.errors })
}

const deletar = async (req, res) => {
    try {
        await userQuerys.deletar(req.userId)
        res.status(204).json({ message: "User successfully deleted!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }

}
const update = async (req, res) => {

    try {
        await userQuerys.update(req.body, req.userId)
        res.status(200).json({ message: "User successfully updated!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }

}

const getUser = async(req,res)=>{
    try{
        const user = await userQuerys.searchUsers(req.email)
        res.status(200).json(user) 
    } catch(error){
        res.status(500).json({message:error})
    }
}


module.exports = {
    create,
    deletar,
    update, 
    getUser,
}