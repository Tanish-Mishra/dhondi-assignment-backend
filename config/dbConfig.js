const mongoose = require('mongoose')

const dbConfig = async () => {
    try {
     await mongoose.connect('mongodb://127.0.0.1:27017/blogDB');
     console.log("Database Connected Successfully!")
    } catch (err) {
        console.log(`[Error]:: ${err}`)
    }
}

module.exports = dbConfig