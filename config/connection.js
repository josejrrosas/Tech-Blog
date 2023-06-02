const Sequelize = require('sequelize');
require('dotenv').config();

// const urlDB=`mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}:
// ${process.env.MYSQLHOST}:${process.env.MYSQLPORT}:${process.env.MYSQLDATABASE}`
//const sequelize = sequelize.createConnection(urlDB)

const urlDB='mysql://root:DxVwu35Wm07pxaFpUmqX@containers-us-west-65.railway.app:5985/railway'

// let sequelize = new Sequelize(process.env.urlDB);
const sequelize = new Sequelize(urlDB, {
  dialect: 'mysql',
  operatorsAliases: false,
})

// let sequelize;

// if (process.env.urlDB) {
//   sequelize = new Sequelize(process.env.urlDB);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

module.exports = sequelize;