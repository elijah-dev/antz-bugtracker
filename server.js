const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectToMongoDb = require('./config/mongodb');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// connectToDatabase
connectToMongoDb();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up static directory
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(
  process.env.PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
