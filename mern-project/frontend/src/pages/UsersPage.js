// UsersPage.js
import React from 'react';
import Users from '../components/Users';
import styles from '../styles/UsersPage.module.css';

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <h1>Users Page</h1>
      <Users />
    </div>
  );
};

export default UsersPage;
