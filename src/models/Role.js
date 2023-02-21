import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
});

// {name: 'admin', _id: 'aaaaa11111'};
// {name: 'moderator', _id: 'aaaaa11111'};

export default model('Role', roleSchema);