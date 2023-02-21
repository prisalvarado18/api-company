// This file is for setting express up

import express from 'express';
import morgan from 'morgan'; // middleware
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.set('pkg', pkg);
app.use(morgan('dev'));
// Allow our app to understand JSON format
app.use(express.json());

// When they ask for the main path
// I want you to respond with specific info
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});
// All of productsROutes will start with /products
app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

export default app;