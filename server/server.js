import { connectDB } from './data.js';
import * as dotenv from 'dotenv';
dotenv.config();

// METHODS
const startServer = async () => {
  try {
    const { default: app } = await import('./app.js');
    const port = process.env.PORT || 3000;
    const dbURL = process.env.DATABASE_URL.replace(
      '<password>',
      process.env.DATABASE_PASSWORD
    );

    await connectDB(dbURL);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(`ERROR from startServer => ${err.message}`);
  }
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit();
});

startServer();

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  process.exit();
});
