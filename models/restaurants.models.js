const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Restaurant = sequelize.define("Restaurant", {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.ENUM("€", "€€", "€€€", "€€€€"),
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log('Restaurant table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Restaurant;

