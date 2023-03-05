const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Feature = sequelize.define("Feature", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    category_feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log('Feature table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Feature;