const { v4: uuidv4 } = require('uuid');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      id: '01',
      nome: 'Lígia',
      avatar: 'img/team/01.jpg',
      createdAt: '2021-07-18 12:04:05',
    },
    {
      id: '02',
      nome: 'Letícia',
      avatar: 'img/team/04.jpg',
      createdAt: '2021-07-18 12:04:05',
    },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};