const express = require('express')
const app = express()
const dotEnv = require('dotenv')
dotEnv.config()
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(errorHandler)
app.get('/',(req,res)=>{
    res.send("Hello World")
})


app.listen(PORT,(err)=>{
    if(!err) console.log(`Server is running on http://${HOST}:${PORT}`)
    else console.log(err)
})