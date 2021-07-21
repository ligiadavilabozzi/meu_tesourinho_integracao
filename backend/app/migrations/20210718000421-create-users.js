const { v4: uuidv4 } = require('uuid');
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false,
                defaultValue: uuidv4()
            },
            nome: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            senha: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};