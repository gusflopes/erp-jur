import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,

        rg: Sequelize.STRING,
        birth_date: Sequelize.STRING,
        nit: sequelize.STRING,
        marital_status: Sequelize.STRING,
        occupattion: Sequelize.STRING,

        telephone_id: Sequelize.INTEGER,
        banking_details: Sequelize.INTEGER,

        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'client_id', as: 'addresses' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Client;
