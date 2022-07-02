// import mongoose package
const mongoose = require('mongoose')

// declare a Database string URI
const DB_URL = process.env.DATABASE_URL

// establishing a database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export the connection object
module.exports = connection