// This file is for the application to start
// require('dotenv').config();
import app from './app';
import connectDB from'./database';
import mongoose from "mongoose";
connectDB();

const database = mongoose.connection;

database.on('error', (error) => {
  console.error(`Error al conectar a la base de datos: ${error}`);
});

database.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(4000);

console.log('Server listening on port', 4000);