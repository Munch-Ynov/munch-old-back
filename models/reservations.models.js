const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Reservation = sequelize.define("Reservation", {

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
    nb_people: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status : {
        type: DataTypes.ENUM("pending", "accepted", "refused"),
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log('Reservation table created successfully!');
} ).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Reservation;