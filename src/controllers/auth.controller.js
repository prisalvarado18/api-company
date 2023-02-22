import User from '../models/User';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import Role from '../models/Role';

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
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: 'user' });
        newUser.roles = [role._id];
    };

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, SECRET, {
        expiresIn: 86400 // 24 hours
    });
    // res.json('signup');
    return res.status(200).json({ token });
};

export const signIn = async (req, res) => {
    // res.json('signin');
    const userFound = await User.findOne({ email: req.body.email }).populate(
        'roles'
    );
    if (!userFound) return res.status(400).json({ message: 'User not found'});
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})
    const token = jwt.sign({id: userFound._id}, SECRET, {
        expiresIn: 86400
    })
    // console.log(userFound);
    res.json({token});
}; 