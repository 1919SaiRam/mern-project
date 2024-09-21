const mongoose = require('mongoose');
const User = require('../backend/models/User');

mongoose.connect('mongodb://localhost:27017/mernDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertUsers = async () => {
  await User.create({
    name: 'Vijay Kumar',
    email: 'vijay@example.com',
    age: 30,
  });
  console.log('Users inserted');
  process.exit();
};

insertUsers();
