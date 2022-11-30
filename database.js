const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize('mysql://rkrv5lqrs55qijvyd1yw:pscale_pw_xnVS1Hl0rgIJcteTBsCIAxJjMawpUVcQDTIGaofkXI9@eu-central.connect.psdb.cloud/munch', { dialect: "mysql", dialectOptions: { ssl: {} } });

module.exports = sequelize