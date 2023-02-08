const restaurantService = require('../services/restaurants.service');
const usersService = require('../services/users.service');

async function getAllRestaurants(req, res) {
    const restaurants = await restaurantService.getAllRestaurants();

    if (!restaurants) {
        return res.status(404).json({ message: 'Restaurants not found' });
    } else {
        return res.status(200).json(restaurants);
    }
}

async function getRestaurantById(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const restaurant = await restaurantService.getRestaurantById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        } else {
            return res.status(200).json(restaurant);
        }
    }
}

async function createRestaurant(req, res) {
    // verify if user exists
    try {
        const user = await usersService.getUserById(req.body.user_id);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'User not found' });
    }
    const restaurant = await restaurantService.createRestaurant(req.body);

    if (!restaurant) {
        return res.status(400).json({ message: 'Restaurant not created' });
    } else {
        return res.status(201).json(restaurant);
    }
}

async function updateRestaurant(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);

        if (!restaurant) {
            return res.status(400).json({ message: 'Restaurant not updated' });
        } else {
            return res.status(200).json(restaurant);
        }
    }
}

async function deleteRestaurant(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const restaurant = await restaurantService.deleteRestaurant(req.params.id);

        if (!restaurant) {
            return res.status(400).json({ message: 'Restaurant not deleted' });
        } else {
            return res.status(200).json({ message: 'Restaurant deleted' });
        }
    }
}

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};


