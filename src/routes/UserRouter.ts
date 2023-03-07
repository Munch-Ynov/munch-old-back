import express from 'express';
import {authMiddleware} from '../middlewares/auth-middleware';
import User from '../controllers/User' 


export const UserRouter = express.Router();

UserRouter.get('/', User.getAllUsers);
UserRouter.get('/me', User.getMe);
UserRouter.get('/:id',User.getUserById);
UserRouter.post('/',authMiddleware, User.createUser);
UserRouter.post('/login', User.loginUser);
UserRouter.put('/:id',authMiddleware, User.updateUser);
UserRouter.delete('/:id',authMiddleware, User.deleteUser);
UserRouter.delete('/:id/logout', User.logoutUser);
