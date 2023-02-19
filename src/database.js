// Este módulo me permite tener un método de conexión 
// llamado connect()
// Mongoose recibe una dirección de MongoDB
import mongoose from 'mongoose';
import { MONGODB_URI } from "./config.js";

// Este método connect() recibe una dirección de MongoDB
const connectDB =  () => {
    try {
         return mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // console.info('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
};

mongoose.set('strictQuery', true);

export default connectDB;