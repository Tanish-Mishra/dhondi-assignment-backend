const express = require('express')
const Router = express.Router() 

const {getAllBlogs,addBlog,deleteBlog,editBlogById} = require('../controllers/blogController')

Router.get('/get-blog',getAllBlogs)
Router.post('/create-blog',addBlog)
Router.delete('/delete-blog/:id',deleteBlog)
Router.patch('/edit-blog/:id',editBlogById)


module.exports = Router