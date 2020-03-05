const mongoose = require('mongoose');

const connectToMongoDb = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB connected ${conn.connection.host}`.yellow.underline);
};

module.exports = connectToMongoDb;
