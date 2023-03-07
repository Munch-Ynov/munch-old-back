import { createUser } from "./handlers/createUserRequest";
import { deleteUser } from "./handlers/deleteUserRequest";
import { getAllUsers } from "./handlers/getAllUsersRequest";
import { getMe } from "./handlers/getMeRequest";
import { getUserById } from "./handlers/getUserByIdRequest";
import { loginUser } from "./handlers/loginUserRequest";
import { logoutUser } from "./handlers/logoutUserRequest";
import { updateUser } from "./handlers/updateUserRequest";

export default { 
    getAllUsers,
    createUser,
    getUserById,
    loginUser,
    updateUser,
    deleteUser,
    getMe,
    logoutUser
}