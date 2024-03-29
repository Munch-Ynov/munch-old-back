const router = require('express').Router();

const userController = require('../controllers/users.controllers');
const userMiddleware = require('../middlewares/users.middlewares');

router.get('/', userMiddleware, userController.getAllUsers);
router.get('/me', userMiddleware, userController.getMe);
router.get('/:id', userMiddleware, userController.getUserById);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', userMiddleware, userController.updateUser);
router.delete('/:id', userMiddleware, userController.deleteUser);
router.delete('/logout',userMiddleware, userController.logOutUser);

module.exports = router;