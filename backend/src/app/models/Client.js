import Sequelize, { Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,

        rg: Sequelize.STRING,
        birth_date: Sequelize.DATEONLY,
        nit: sequelize.STRING,
        marital_status: Sequelize.STRING,
        occupattion: Sequelize.STRING,

        telephone_id: Sequelize.INTEGER,
        banking_details: Sequelize.INTEGER,

        email: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'clients',
      }
    );

    // hooks

    return this;
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'client_id', as: 'addresses' });
  }

  // methods
}

export default Client;
