const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Favorite = sequelize.define("Favorite", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log('Restaurant table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Favorite;