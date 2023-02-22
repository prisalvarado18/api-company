// This module allows me to have a connection method
// called connect()
// Mongoose receives an address from MongoDB
import mongoose from 'mongoose';
import { MONGODB_URI } from "./config.js";

// This connect() method receives an address from MongoDB
const connectDB =  () => {
    try {
         return mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: true,
            // useCreateIndex: true,
        });
        // console.info('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
};

mongoose.set('strictQuery', true);

export default connectDB;