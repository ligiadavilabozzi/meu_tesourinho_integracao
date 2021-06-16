Configurar o backend: 
const express = require("express");
const cors = require("cors");

//startar o express 
const app = express();

//cors é uma lib faz o back se conectar com o front então vamos exportar nossa app e esperar a conexão com o front end

// setar opções para url de origem do projeto - 
let corsOptions = {
    origin: "http://localhost:8081"
};
//com isso quando setar o servidor de front end ele vai olhar na a api que setar o projeto e vai esperar por esse api logar 

//se tentarmos conectar o front com o beck e der erro de cors falta essa config: do appuse com ors 
app.use(cors(corsOptions));

//outra coisa que tem que ter quando lidamos com o beck e front desacoplados - precisamos ter: 
//isso é para gerencuiar que queremos json para os dois lados - queremos passar um objeto
app.use(express.json())

//é o bodyparser mas como estamos no express - não precisamos da lib do bodyparser o express gerencia isso - estamos passando um middleware para que reafirme que só queremos as rotas transidtando em json
app.use(express.urlencoded({extended:true}))

//rota simples para teste: 

app.get('/', (req,res) => {
    res.json({message: "Hello World!"})
});

//vamos colocar o servidor para rodar: 
// PORT maiusculo pq depois a gente pode colocar uma variavel de ambiente, 
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})


http://localhost:8081 - FRONT END - origem da req. 
8080 - BACK END 


CRIAR A PASTA APP
    - criar a pasta de config 
      - Criar o arquivo db.config.js -> nela vamos configurar o sequelize
    - //configuração do sequelize 
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "", 
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


  > em app criar uma nova pasta: model 
    - modelo de usuário e de role(função - admin ou não)
  
      - user.model.js
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




      - role.model.js vamos criar a model de role que vai administrar se meu usuário é admin ou normal
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

> Falta inicializar o sequelize. 
    > em models criar o index.js (arquivo que por padrão que qdo é compilado para JS ele le primeiro, exemplo typescript (le index primeiro e reduz problemas de import))
    vamos configurar o sequelize, primeiro damos um require no db.config pq vamos usar ele para configurar o banco de dados. 

    é melhor criar primeiro as models e conforme vamos programando criar os relacionametos 

    //require
const config = require ("../config/db.config"); 
const Sequelize = require("sequelize") 

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
const db = {} //vamos passar um objeto vazio e embaixo o que queremos que ele seja 
db.Sequelize = Sequelize; 
db.sequelize = sequelize;

//vamos carregar os relacionamentos, pq a model só vai representar o modelo do banco de dados 
db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);
//estamos chamando o db e dando um import no user e no role e passamos as propriedades do sequelize.   

Já que puxamos e importamos, precisamos fazer algo com eles: 
//require
const config = require ("../config/db.config"); 
const Sequelize = require("sequelize"); 
const { BelongsToMany } = require("sequelize");

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
const db = {} //vamos passar um objeto vazio e embaixo o que queremos que ele seja 
db.Sequelize = Sequelize; 
db.sequelize = sequelize;

//vamos carregar os relacionamentos, pq a model só vai representar o modelo do banco de dados 
db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);
//estamos chamando o db e dando um import no user e no role e passamos as propriedades do sequelize.   

//RELACIONAMENTOS: 
db.role.BelongsToMany(db.user,{
    through: "user_roles",   //poronde vai passar o relacionamento 
    foreignKey: "roleId", 
    otherKey: "userId"      //como se fosse outra chave (não precisa)
});

db.user.BelongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
}); // pq no user foi o role, estamos relacionando essa com a de cima ^

//vamos exportar as roles que temos 
db.ROLES= ["user", "admin", "moderator"]

//exportar o db
module.exports = db

obs. colocamos otherKey para assegrar que é uma relação forte - não precisaria. Não é em termos de segurança mas em termos de autenticidade. 

Com isso já temos o básico do bd , agora é ir no server.js e importar essas configs: 
const express = require("express");
const cors = require("cors");

//startar o express 
const app = express();

//cors é uma lib faz o back se conectar com o front então vamos exportar nossa app e esperar a conexão com o front end

// setar opções para url de origem do projeto - 
let corsOptions = {
    origin: "http://localhost:8081"
};
//com isso quando setar o servidor de front end ele vai olhar na a api que setar o projeto e vai esperar por esse api logar 

//se tentarmos conectar o front com o beck e der erro de cors falta essa config: do appuse com ors 
app.use(cors(corsOptions));

//outra coisa que tem que ter quando lidamos com o beck e front desacoplados - precisamos ter: 
//isso é para gerencuiar que queremos json para os dois lados - queremos passar um objeto
app.use(express.json())

//é o bodyparser mas como estamos no express - não precisamos da lib do bodyparser o express gerencia isso - estamos passando um middleware para que reafirme que só queremos as rotas transidtando em json
app.use(express.urlencoded({extended:true}))

//Chamar o banco de dados que exportamos: 
const db = require("./app/models") //vamos trazer só as pastas pq vaos trazer tudo o que tem nelas
const Role = db.role;               

db.sequelize.sync({force:true}).then(()=>{ //é uma promisse vai esperar o primeiro para depois executar o segundo 
    console.log("Dopando e syncandoo banco"); 
    initial(); //essa função não existe e vamos criar pq se logar no banco e não ter nada no banco nao vamos conseguir logar, nao temos user, admin, moderator, NADA. ENTAO vamos passar uma função que vai carregar os primeiros usuarios, para ter um primeiro escopo
})  //pode passar um force pra dopar o bd e reconstruir do zero (NÃO precisa fazer sempre)

function initial() {
    //queremos que o role crie : 
    Role.create({
        id:1, 
        name: "user"
    }); 
    Role.create({
        id:2,
        name: "moderator"
    }); 
    Role.create({
        id:3, 
        name: "admin"
    })
}



//rota simples para teste: 

app.get('/', (req,res) => {
    res.json({message: "Hello World!"})
});

//vamos colocar o servidor para rodar: 
// PORT maiusculo pq depois a gente pode colocar uma variavel de ambiente, 
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})


