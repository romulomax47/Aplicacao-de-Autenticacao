const dotenv = require('dotenv')
dotenv.config()


module.exports = {
    local: {

        localDatabaseURL: process.env.DB_URL,
        secret:"password"
    }
}