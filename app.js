const express = require('express');
const dotenv = require('dotenv');

// 1. Load environment variables FIRST
dotenv.config();

// 2. Require database config AFTER loading env vars
const connectDB = require('./src/config/db');
const studentRoutes = require('./src/routes/student.routes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});