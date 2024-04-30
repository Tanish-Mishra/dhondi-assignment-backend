const express = require('express')
const Router = express.Router() 

const {getAllBlogs,addBlog,deleteBlog} = require('../controllers/blogController')

Router.get('/get-blog',getAllBlogs)
Router.post('/create-blog',addBlog)
Router.delete('/delete-blog/:id',deleteBlog)


module.exports = Router