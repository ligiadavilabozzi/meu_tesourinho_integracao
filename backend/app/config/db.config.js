//configuração do sequelize 
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "HE29&iaa", 
    DB: "backend_tesourinho",
    dialect: "mysql", 
    //vamos criar uma pool de conexão ocm valores que queremos que a conexão tenha, isso serve para chegar mais perto de um padrao de normalidade (de um modelo real)

    pool: {
        max: 5, 
        min: 0, 
        acquire: 3000,
        idle: 10000
    }
}; 

