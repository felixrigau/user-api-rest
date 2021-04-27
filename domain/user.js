'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
}, {id: false}); 

module.exports = mongoose.model('User', userSchema)

