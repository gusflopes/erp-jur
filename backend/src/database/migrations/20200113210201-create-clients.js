module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      cpf: { type: Sequelize.STRING, allowNull: true },

      rg: { type: Sequelize.STRING, allowNull: true },
      birth_date: { type: Sequelize.DATEONLY, allowNull: true },
      nit: { type: Sequelize.STRING, allowNull: true },
      marital_status: { type: Sequelize.STRING, allowNull: true },
      occupattion: { type: Sequelize.STRING, allowNull: true },

      /*
      address_id: { type: Sequelize.STRING, allowNull: true },
      telephone_id: { type: Sequelize.STRING, allowNull: true },
      banking_details: { type: Sequelize.STRING, allowNull: true },
      */

      email: { type: Sequelize.STRING, allowNull: true },

      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('clients');
  },
};
