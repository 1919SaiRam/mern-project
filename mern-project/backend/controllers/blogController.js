const Blog = require('../models/Blog');

// Get all blogs
exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

// Create a new blog post
exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const newBlog = new Blog({ title, content, author });
  await newBlog.save();
  res.json(newBlog);
};
