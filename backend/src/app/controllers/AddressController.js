import Address from '../models/Address';
import Client from '../models/Client';

class AddressController {
  async index(req, res) {
    const { client_id } = req.params;
    // fazer um include com nome do cliente
    // nao fazer assim
    // const address = await Address.findAll({ where: { client_id } });

    const addresses = await Client.findByPk(client_id, {
      include: { association: 'addresses' },
    });

    return res.json(addresses);
  }

  async store(req, res) {
    const { client_id } = req.params;
    const { zipcode, street, number, street2, city, state, country } = req.body;

    const address = await Address.create({
      client_id,
      zipcode,
      street,
      number,
      street2,
      city,
      state,
      country,
    });

    return res.json(address);
  }
}

export default new AddressController();
