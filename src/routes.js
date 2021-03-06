const express = require('express');
const AdressController = require('./controllers/AdressController');
const UserController = require('./controllers/UserController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');
const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/adresses', AdressController.find);
routes.get('/adresses', AdressController.index);
routes.post('/users/:user_id/adresses', AdressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);


module.exports = routes;