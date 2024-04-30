const express = require('express')
const app = express()
const dotEnv = require('dotenv')
dotEnv.config()
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'
const errorHandler = require('./middlewares/errorHandler')
const dbConfig = require('./config/dbConfig')
dbConfig()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(errorHandler)

const blogRoutes = require('./routes/blogRoutes')

app.use('/api/v1/blogs',blogRoutes)


app.get('/health',(req,res)=>{
    res.send("Server is Running Healthy on AWS!")
})


app.listen(PORT,(err)=>{
    if(!err) console.log(`Server is running on http://${HOST}:${PORT}`)
    else console.log(err)
})