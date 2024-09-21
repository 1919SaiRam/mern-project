import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:3000/blogs');
    setBlogs(response.data);
  };

  const addBlog = async () => {
    const newBlog = { title, content };
    await axios.post('http://localhost:5000/blogs', newBlog);
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/blogs/${id}`);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => deleteBlog(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className={styles.addBlog}>
        <h3>Add New Blog Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addBlog}>Add Blog</button>
      </div>
    </div>
  );
};

export default Blog;

