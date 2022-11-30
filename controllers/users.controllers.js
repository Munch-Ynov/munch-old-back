const UsersService = require('../services/users.service');
const jwt = require('jsonwebtoken');


async function getAllUsers(req, res) {
  const users = await UsersService.getAllUsers();

  if (!users) {
    return res.status(404).json({ message: 'Users not found' });
  } else {
    return res.status(200).json(users);
  }
}

async function getUserById(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const user = await UsersService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            return res.status(200).json(user);
        }
    }
}

async function createUser(req, res) {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'firstName, lastName, email and password are required' });
    } else if (await UsersService.getUserByEmail(req.body.email)) {
        return res.status(400).json({ message: 'Email already in use' });
    } else {
        const user = await UsersService.createUser(req.body);

        if (!user) {
            return res.status(400).json({ message: 'User not created' });
        } else {
            return res.status(201).json(user);
        }
    }
}

async function loginUser(req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'email and password are required' });
    } else {
        const user = await UsersService.loginUser(req.body.email, req.body.password);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            return res.status(200).json({ message: 'User logged in' });
        }
    }
}

async function updateUser(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else if (!req.body.firstName || !req.body.firstName || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'firstName, lastName, email and password are required' });
    } else {
        const user = await UsersService.updateUser(req.params.id, req.body);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            return res.status(200).json(user);
        }
    }
}

async function deleteUser(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const user = await UsersService.deleteUser(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            return res.status(200).json({ message: 'User deleted' });
        }
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    loginUser,
    updateUser,
    deleteUser
};