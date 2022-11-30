const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const CategoryFeature = sequelize.define("CategoryFeature", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log('CategoryFeature table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = CategoryFeature;