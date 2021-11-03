const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');
const Adress = require('../model/Adress');
const Tech = require('../model/Tech');
const { createPool } = require('mysql2/promise');

const connection = new Sequelize(dbConfig);

User.init(connection);
Adress.init(connection);
Tech.init(connection);

User.associate(connection.models);
Adress.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;