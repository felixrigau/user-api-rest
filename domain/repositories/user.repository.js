'use strict';
const User = require('./../user')

module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    getUser: getUser,
    getUsers: getUsers,
    deleteUser: deleteUser
};

async function getUsers() {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        throw error
    }
}

async function createUser(userData) {
    try {
        const user = new User(userData);
        return await user.save();
    } catch (error) {
        throw error
    }
}

async function updateUser(userId, updatedUser) {
    console.log('userId', userId)
    console.log('updatedUser', updatedUser)
    try {
        return await User.findOneAndUpdate( userId, updatedUser);
    } catch (error) {
        throw error
    }
}

async function getUser(userId) {
    try {
        return await User.findById(userId);
    } catch (error) {
        throw error
    }
}

async function deleteUser(userId) {
    try {
        return await User.findOneAndDelete(userId);
    } catch (error) {
        throw error
    }
}
