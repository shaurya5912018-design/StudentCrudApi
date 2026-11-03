// src/config/db.js
const mongoose = require('mongoose');
const dns = require('dns');
const dotenv = require('dotenv');

dotenv.config();

// Ensure Node uses reliable DNS servers for SRV resolution on Windows
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {
  // Ignore fallback if custom dns cannot be set
}

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;
    if (!mongoUri) {
      throw new Error('Neither MONGO_URI nor MONGO_URL is defined in environment variables');
    }
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB is connected SUCCESSFULLY!');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
  }
};

module.exports = connectDB;
