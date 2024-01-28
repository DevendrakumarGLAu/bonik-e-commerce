// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db'); // Import the database connection
const signupRoutes = require('./routes/signup'); // Import the signup route
const loginRoutes = require('./routes/login'); // Import the login route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Use signup route
app.use('/signup', signupRoutes);

// Use login route
app.use('/login', loginRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
