module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lawsuits', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'companies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      folder: { type: Sequelize.STRING, allowNull: false },
      type: { type: Sequelize.STRING, allowNull: false },
      details: { type: Sequelize.TEXT, allowNull: true },

      cnj_number: { type: Sequelize.STRING, allowNull: true },
      start_date: { type: Sequelize.DATEONLY, allowNull: true },
      juizo: { type: Sequelize.STRING, allowNull: true },
      comarca: { type: Sequelize.STRING, allowNull: true },

      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('lawsuits');
  },
};
