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
app.use(express.json());

//é o bodyparser mas como estamos no express - não precisamos da lib do bodyparser o express gerencia isso - estamos passando um middleware para que reafirme que só queremos as rotas transidtando em json
app.use(express.urlencoded({extended:true}));

//Chamar o banco de dados que exportamos: 
const db = require("./app/models") //vamos trazer só as pastas pq vaos trazer tudo o que tem nelas
const Role = db.role;           
const Transaction = db.transaction;    

db.sequelize.sync({force:true}).then(()=>{ //é uma promisse vai esperar o primeiro para depois executar o segundo 
    console.log("Dopando e syncandoo banco"); 
    initial(); //essa função não existe e vamos criar pq se logar no banco e não ter nada no banco nao vamos conseguir logar, nao temos user, admin, moderator, NADA. ENTAO vamos passar uma função que vai carregar os primeiros usuarios, para ter um primeiro escopo
});  //pode passar um force pra dopar o bd e reconstruir do zero (NÃO precisa fazer sempre)

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
    });
    Transaction.create({
        id:1,
        level: 1, 
        income: 50.00,
        outcome: 20.00,
    }); 
    Transaction.create({
        id:2,
        level: 2, 
        income: 100.00,
        outcome: 30.00,
    }); 
    

};



//rota simples para teste: 

app.get('/', (req,res) => {
    res.json({message: "Hello World!"})
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

//vamos colocar o servidor para rodar: 
// PORT maiusculo pq depois a gente pode colocar uma variavel de ambiente, 
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})

