// BlogPage.js
import React from 'react';
import Blog from '../components/Blog';
import styles from '../styles/BlogPage.module.css';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1>Blog Page</h1>
      <Blog />
    </div>
  );
};

export default BlogPage;
