const User = require('../models/User');

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });
  await newUser.save();
  res.json(newUser);
};
