const reservationsService = require('../services/reservations.service');
const usersService = require('../services/users.service');
const restaurantsService = require('../services/restaurants.service');
async function getAllReservations(req, res) {
    const reservations = await reservationsService.getAllReservations();

    if (!reservations) {
        return res.status(404).json({ message: 'Reservations not found' });
    } else {
        return res.status(200).json(reservations);
    }
}

async function getReservationById(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const reservation = await reservationsService.getReservationById(req.params.id);

        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        } else {
            return res.status(200).json(reservation);
        }
    }
}

async function createReservation(req, res) {
    if (!req.body.user_id || !req.body.restaurant_id || !req.body.nb_people || !req.body.date || !req.body.status) {
        return res.status(400).json({ message: 'user_id, restaurant_id, nb_people, date and status are required' });
    }

    else {
        // verify if user exists
        console.log(req.body.user_id);
        try {
            const user = await usersService.getUserById(req.body.user_id);
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
        } catch (error) {
            return res.status(400).json({ message: 'User not found' });
        }
        // verify if restaurant exists
        try {
            const restaurant = await restaurantsService.getRestaurantById(req.body.restaurant_id);
            if (!restaurant) {
                return res.status(400).json({ message: 'Restaurant not found' });
            }
        } catch (error) {
            return res.status(400).json({ message: 'Restaurant not found' });
        }
        const reservation = await reservationsService.createReservation(req.body);
        if (!reservation) {
            return res.status(400).json({ message: 'Reservation not created' });
        } else {
            return res.status(201).json(reservation);
        }
    }
}

async function updateReservation(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        try {
            const user = await usersService.getUserById(req.body.user_id);
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
        } catch (error) {
            return res.status(400).json({ message: 'User not found' });
        }
        // verify if restaurant exists
        try {
            const restaurant = await restaurantsService.getRestaurantById(req.body.restaurant_id);
            if (!restaurant) {
                return res.status(400).json({ message: 'Restaurant not found' });
            }
        } catch (error) {
            return res.status(400).json({ message: 'Restaurant not found' });
        }
        const reservation = await reservationsService.updateReservation(req.params.id, req.body);

        if (!reservation) {
            return res.status(400).json({ message: 'Reservation not updated' });
        } else {
            return res.status(200).json(reservation);
        }
    }
}

async function deleteReservation(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const reservation = await reservationsService.deleteReservation(req.params.id);

        if (!reservation) {
            return res.status(400).json({ message: 'Reservation not deleted' });
        } else {
            return res.status(204).json();
        }
    }
}

module.exports = {
    getAllReservations,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation
};

