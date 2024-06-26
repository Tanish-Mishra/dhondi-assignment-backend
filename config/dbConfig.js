const mongoose = require('mongoose')

const dbConfig = async () => {
    try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log("Database Connected Successfully!")
    } catch (err) {
        console.log(`[Error]:: ${err}`)
    }
}

module.exports = dbConfig