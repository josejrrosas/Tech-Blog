const Sequelize = require('sequelize');
require('dotenv').config();

const urlDB='mysql://root:DxVwu35Wm07pxaFpUmqX@containers-us-west-65.railway.app:5985/railway'

// const sequelize = new Sequelize(urlDB, {
//   dialect: 'mysql',
//   operatorsAliases: false,
// })


if (process.env.urlDB) {
  sequelize = new Sequelize(urlDB, {
  dialect: 'mysql',
  operatorsAliases: false,
})
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;