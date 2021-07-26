const { User } = require('../models');


// const create = async(user) => await User.create(user)

const searchUsers = async (email) => await User.findOne({
    where: {
        email: email
    }
})

const deletar = async (id) => await User.destroy({
    where: {
        id: id
    }
});

const update = async (params, userId) => await User.update({
    username: params.nome,
    email: params.email
},
    {
        where: {
            id: userId
        }
    });



module.exports = {
    searchUsers,
    deletar,
    update, 
    
}