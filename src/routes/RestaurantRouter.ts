import express from 'express';
import {authMiddleware} from '../middlewares/auth-middleware';
import Restaurant from '../controllers/Restaurant' 


export const RestaurantRouter = express.Router();

RestaurantRouter.get('/', Restaurant.getAllRestaurants);
RestaurantRouter.get('/:id',Restaurant.getRestaurantById);
RestaurantRouter.post('/',authMiddleware, Restaurant.createRestaurant);
RestaurantRouter.put('/:id',authMiddleware, Restaurant.updateRestaurant);
RestaurantRouter.delete('/:id',authMiddleware, Restaurant.deleteRestaurant);
