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
    user = await db.create(newUser);
    const userCreate = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        favoris: user.favoris,
        admin: user.admin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
    return userCreate;
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
    // return user without password
    const userLogin = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        favoris: user.favoris,
        admin: user.admin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
    return userLogin;
}

function getAllUsers() {
    return db.findAll();
}

async function getUserById(id) {
    const user = await db.findByPk(id)
    const userCreate = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        favoris: user.favoris,
        admin: user.admin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
    return userCreate;
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
