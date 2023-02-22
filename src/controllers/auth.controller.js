import User from '../models/User';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';

export const signUp = async (req, res) => {
    // From req.body Im gonna wait for the user to send me
    // username, email, password and roles and I will be
    // in charge to look for them
    const { username, email, password, roles } = req.body;
    // console.log(req.body);

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    // console.log(newUser);
    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, SECRET, {
        expiresIn: 86400 // 24 hours
    });
    // res.json('signup');
    res.status(200).json({ token });
};

export const signIn = async (req, res) => {
    res.json('signin');
}; 