module.exports = (sequelize, Sequelize) => {
    //vamos criar a model de user e define para mim essa model e vamos passar um objeto de usuário
    const User = sequelize.define('users', {
        username: {
        type: Sequelize.STRING
    }, 
    email:{
        type: Sequelize.STRING
    }, 
    password: {
        type: Sequelize.STRING
    }
}); 
//retornar o usuário 
return User;
}