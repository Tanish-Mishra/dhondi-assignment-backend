const Blogs = require("../models/Blogs");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogList = await Blogs.find({});
    res.status(200).json({
      blogs: blogList,
    });
  } catch (error) {
    next(error);
  }
};

const addBlog = async (req, res, next) => {
  try {
    const { blogTitle, blogDescription, keywords } = req.body;

    if (!blogTitle || !blogDescription || !keywords) {
      return res.status(400).json({
        message: "Please provide title,description and keyword",
      });
    }

    const newBlog = new Blogs({
      blogTitle,
      blogDescription,
      keywords,
    });
    await newBlog.save();
    res.status(201).json({
      message: "Blog Created Successfully!",
    });
  } catch (error) {
    next(error);
  }
};
 
const deleteBlog = async(req,res,next) => {
    try {
       
        const id = req.params.id
         
     if(!id) {
        res.status(400).json({
            message: "Please provide blog id"
        })
     }
     
     await Blogs.findByIdAndDelete(id)
        res.status(200).json({
            message: "Blog Deleted Successfully!"
        })
    
    } catch (error) {
        next(error)
    }
}

const editBlogById = async(req,res,next) => {
    try {
        const id = req.params.id
        const { blogTitle, blogDescription, keywords } = req.body;
        
        if(!id || !blogTitle || !blogDescription || !keywords) {
            res.status(400).json({
                message: "Please provide id,title,description and keywords"
            })
        }
        
        await Blogs.findByIdAndUpdate(id,{
            blogTitle,
            blogDescription,
            keywords
        })
        
        res.status(200).json({
            message: "Blog Updated Successfully!"
        })
    } catch (error) {
        next(error)
    }

}

module.exports = {
  getAllBlogs,
  addBlog,
  deleteBlog,
  editBlogById
};
