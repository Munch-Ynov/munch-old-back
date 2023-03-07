import { createRestaurant } from "./handlers/createRestaurantRequest";
import { deleteRestaurant } from "./handlers/deleteRestaurantRequest";
import { getAllRestaurants } from "./handlers/getAllRestaurantsRequest";
import { getRestaurantById } from "./handlers/getRestaurantByIdRequest";
import { updateRestaurant } from "./handlers/updateRestaurantRequest";


export default { 
    getAllRestaurants,
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
}