const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const { faker } = require('@faker-js/faker/locale/fr');

const Restaurant = sequelize.define("Restaurant", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: faker.company.name(),
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: faker.address.streetAddress()
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: faker.lorem.paragraph()
    },
    price: {
        type: DataTypes.ENUM("€", "€€", "€€€", "€€€€"),
        allowNull: false,
        defaultValue: faker.helpers.arrayElement(["€", "€€", "€€€", "€€€€"])
    },
    n_siret: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: faker.phone.phoneNumber()
    },
    code_postal: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: faker.address.zipCode()
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: faker.address.city()
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: faker.internet.email()
    },
});

sequelize.sync().then(() => {
    console.log('Restaurant table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Restaurant;

