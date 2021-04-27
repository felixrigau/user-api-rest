require('dotenv').config()

module.exports = {
    db: {
        uri: process.env.MONGODB_URI,
    },
}