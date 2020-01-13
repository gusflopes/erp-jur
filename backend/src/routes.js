import { Router } from 'express';

// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClientController from './app/controllers/ClientController';
import AddressController from './app/controllers/AddressController';

// Middleware
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Public Routes
routes.get('/', (req, res) => res.json({ message: 'Hello World' }));

routes.post('/users', UserController.store);
routes.post('/auth', SessionController.store);

routes.use(authMiddleware);

// Private Routes
routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.get('/users/:user_id/address', AddressController.index);
routes.post('/users/:user_id/address', AddressController.store);

export default routes;
