const db = require('../models/restaurants.models');

async function getAllRestaurants() {
    return db.findAll();
}

async function getRestaurantById(id) {
    return db.findByPk(id);
}

async function createRestaurant(restaurant) {
    return db.create(restaurant);
}

async function updateRestaurant(id, restaurant) {
    await db.update(restaurant, { where: { id } });
    return db.findByPk(id);
}

async function deleteRestaurant(id) {
    return db.destroy({ where: { id } });
}

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};