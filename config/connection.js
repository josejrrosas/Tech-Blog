const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:process.env.DATABASE,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  host:proces.env.DB_HOST,
});

module.exports = sequelize;