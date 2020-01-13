import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.VIRTUAL,
        street2: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        country: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // hooks

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }

  // methods
}

export default Address;
