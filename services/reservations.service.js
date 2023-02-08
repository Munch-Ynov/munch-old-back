const db = require('../models/reservations.models');

async function getAllReservations() {
    return db.findAll();
}

async function getReservationById(id) {
    return db.findByPk(id);
}

async function createReservation(reservation) {
    return db.create(reservation);
}

async function updateReservation(id, reservation) {
    await db.update(reservation, { where: { id } });
    return db.findByPk(id);
}

async function deleteReservation(id) {
    return db.destroy({ where: { id } });
}

module.exports = {
    getAllReservations,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation
};