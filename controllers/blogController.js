const Blogs = require('../models/Blogs')

const getAllBlogs = async (req,res,next) => {
try {
    const blogList = await Blogs.find({})
    res.status(200).json({
        data: blogList
    })
} catch (error) {
      next(error)
}

}

const addBlog = async (req,res,next) => {

    try {
        const {blogTitle,blogDescription,keywords} = req.body
     console.log(blogTitle,blogDescription,keywords)

  if(!blogTitle || !blogDescription || !keywords) { 
        return res.status(400).json({
            message: "Please provide title,description and keyword"
        })
  }

        const newBlog = new Blogs({
            blogTitle,
            blogDescription,
            keywords,
        })
        await newBlog.save()
        res.status(201).json({
            message: "Blog Created Successfully!"
        })
    } catch (error) {
        next(error)
    }




}



module.exports = {
    getAllBlogs,
    addBlog
}