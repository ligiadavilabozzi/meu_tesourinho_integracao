module.exports = {
    HOST: "localhost",
    username: "root",
    PASSWORD: "",
    database: "backend_tesourinho",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};

