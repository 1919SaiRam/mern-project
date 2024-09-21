import axios from 'axios';

// Base URL of the backend API
const API_BASE_URL = 'http://localhost:3000/api'; // Add '/api' to the base URL

export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`); // Now it correctly points to /api/users
  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/users`, user); // This will also point to /api/users
  return response.data;
};
