// This file is for setting express up

import express from 'express';
import morgan from 'morgan'; // middleware
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';

const app = express();

app.set('pkg', pkg);
app.use(morgan('dev'));

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

export default app;