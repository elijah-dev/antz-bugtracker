const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectToMongoDb = require('./config/mongodb');
const cookieParser = require('cookie-parser');
const upload = require('./config/multer');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// connectToDatabase
connectToMongoDb();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

app.use(upload.array('file'));

if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// Setting up static directory
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'client/build')));

// Setting up routes
// Auth routes
const authRoute = require('./routes/auth');
app.use('/api/auth', authRoute);
// Protected routes

const projectRoute = require('./routes/project');
app.use('/api/project', projectRoute);
const issueRoute = require('./routes/issue');
app.use('/api/issue', issueRoute);
const userRoute = require('./routes/user');
app.use('/api/user', userRoute);

//Custom error handler
const errorHandler = require('./midleware/error-handler');
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(
    `Server running in `.cyan.underline +
      `${process.env.NODE_ENV}`.cyan.underline.bold +
      ` on port `.cyan.underline +
      `${process.env.PORT}`.cyan.underline.bold
  )
);
