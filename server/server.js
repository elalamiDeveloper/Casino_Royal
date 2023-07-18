import * as dotenv from 'dotenv';
dotenv.config();

// METHODS
const startServer = async () => {
  try {
    const { default: app } = await import('./app.js');
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log('ERROR from startServer');
  }
};

startServer();
