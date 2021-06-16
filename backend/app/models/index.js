//require
const config = require ("../config/db.config"); 
const Sequelize = require("sequelize"); 


//vamos criar uma "instancia" e ´passar as cofigs 

const sequelize = new Sequelize(
    config.DB, 
    config.USER, 
    config.PASSWORD,
    //VAMOS CRIAR UM objeto e passar o host , o dialeto
    {
        host: config.HOST,
        dialect: config.dialect,
    //pool de conexão.
        //sao as propriedades do banco que criamos em db.config.js
    pool: {
        max: config.pool.max, 
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
    }
); 


//VAMOS exportar 
const db = {}; //vamos passar um objeto vazio e embaixo o que queremos que ele seja 
db.Sequelize = Sequelize; 
db.sequelize = sequelize;

//vamos carregar os relacionamentos, pq a model só vai representar o modelo do banco de dados 
db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);
db.transaction = require('../models/transaction.model')(sequelize, Sequelize);

//estamos chamando o db e dando um import no user e no role e passamos as propriedades do sequelize.   

//RELACIONAMENTOS: 
db.role.belongsToMany(db.user, {
    through: "user_roles",   //poronde vai passar o relacionamento 
    foreignKey: "roleId", 
    otherKey: "userId"      //como se fosse outra chave (não precisa)
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
}); 

db.user.belongsToMany(db.transaction,{
    through: "user_transactions",
    foreignKey: "userId"
} );

db.transaction.belongsToMany(db.user,{
    through: "user_transactions", 
    foreignKey: "transactionId"
} );


//vamos exportar as roles que temos 
db.ROLES= ["user", "admin", "moderator"]
db.TRANSATIONS=[[1,2],[50,100],[20,500]]

module.exports = db