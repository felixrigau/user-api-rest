require('dotenv').config()

module.exports = {
    db: {
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        name: process.env.MONGODB_NAME
    },
}