const router = require('express').Router();

const restaurantController = require('../controllers/restaurants.controller');
const userMiddleware = require('../middlewares/users.middlewares');

router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.post('/', userMiddleware, restaurantController.createRestaurant);
router.patch('/:id', userMiddleware, restaurantController.updateRestaurant);
router.delete('/:id', userMiddleware, restaurantController.deleteRestaurant);

module.exports = router;