module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("roles",{
        //criamos o id , nao ciramos no user, não tem problema pq o sequelize cria para gente. 
        id: { //colocamos esse id pq queremos que ele obedeça as definições abaixo: 
            type: Sequelize.INTEGER,
            primaryKey: true
        }, 
        name:{
            type: Sequelize.STRING
        }
    })
    return Role
}