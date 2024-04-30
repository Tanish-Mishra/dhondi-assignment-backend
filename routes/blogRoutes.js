const express = require('express')
const Router = express.Router() 

const {getAllBlogs,addBlog} = require('../controllers/blogController')

Router.get('/get-blog',getAllBlogs)
Router.post('/create-blog',addBlog)


module.exports = Router