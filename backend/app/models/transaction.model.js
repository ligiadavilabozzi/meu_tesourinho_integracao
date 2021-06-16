module.exports = (sequelize, Sequelize) =>{
    const Transaction = sequelize.define("transactions",{
        id: { 
            type: Sequelize.INTEGER,
            primaryKey: true
        }, 
        level:{
            type: Sequelize.INTEGER,
        }, 
        income:{
            type: Sequelize.DECIMAL(10,2),
        }, 
        outcome:{
            type: Sequelize.DECIMAL(10,2),
        }, 
    })
    return Transaction
}