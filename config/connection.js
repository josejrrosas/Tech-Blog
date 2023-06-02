const Sequelize = require('sequelize');
require('dotenv').config();

// const urlDB=`mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}:
// ${process.env.MYSQLHOST}:${process.env.MYSQLPORT}:${process.env.MYSQLDATABASE}`

const urlDB='mysql://root:DxVwu35Wm07pxaFpUmqX@containers-us-west-65.railway.app:5985/railway'

const sequelize = sequelize.createConnection(urlDB)

module.exports = sequelize;