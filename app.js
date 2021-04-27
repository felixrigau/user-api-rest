'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys')
const users = require('./api/routers/users')

// DB init
mongoose.connect(keys.db.uri, { useNewUrlParser: true })
.then(res => console.log("Connected to DB"))
.catch(err => console.log(err));

// json parse setting
app.use(express.urlencoded())
app.use(express.json())

//User Router
app.use('/api', users)

const port = process.env.PORT || 10010;
app.listen(port);
