const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Enable CORS for all requests
app.use(cors()); 

// Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

// Error Handler
app.use(errorHandler);


// //Create a simple /users route that returns a JSON list of users.
// app.get('/users', (req, res) => {
//     res.json([
//       { name: 'Vijay Kumar', email: 'viay@example.com', age: 28 },
//       { name: 'Ram Kumar', email: 'ram@example.com', age: 25 },
//     ]);
//   });
  

// Listen on Port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
