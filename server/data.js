import mongoose from 'mongoose';

// Connect to database
const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', true);
    console.log('NATOURS DATA connected successfully...');
    await mongoose.connect(url);
  } catch (err) {
    console.log('DB connection failed => ' + err.message);
  }
};

export { connectDB };
