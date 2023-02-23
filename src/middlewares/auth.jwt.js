// It will be used to confirm if the user
// is sending us their token
// Check token: if it is moderator or admin
// AUTHORIZATION
import { SECRET } from '../config';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
    try {
        // De ese request voy a esperar un headers
        // header es un objeto
        // 
        const token = req.headers['x-access-token'];
        // console.log(token);
        if (!token) return res.status(403).json({ message: 'No token provided' });

        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });
        console.log(user);
        if (!user) return res.status(404).json({ message: 'No user found' });
        // console.log(decoded);
        next();

    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    };
};

export const isModerator = async (req, res, next) => {

};

export const isAdmin = async (req, res, next) => {
    
};