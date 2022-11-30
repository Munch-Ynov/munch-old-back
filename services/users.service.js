const db = require('../models/users.models');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

async function createUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
    const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        password: hashedPassword,
        email: user.email,
        favoris: user.favoris,
        admin: false,
    };
    return db.create(newUser);
}

async function loginUser(email, password) {
    const user = await db.findOne({ where: { email } });
    if (!user) {
        return null;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return null;
    }
    return user;
}

function getAllUsers() {
    return db.findAll();
}

function getUserById(id) {
    return db.findByPk(id)
}

function getUserByEmail(email) {
    return db.findOne({ where: { email } });
}

async function updateUser(id, user) {
    if (user.password) {
        const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
        user.password = hashedPassword;
    }
    await db.update(user, { where: { id } });
    return db.findByPk(id);
}

function deleteUser(id) {
    return db.destroy({ where: { id } });
}

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser
};
