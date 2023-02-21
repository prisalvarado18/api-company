import { Schema, model } from 'mongoose';

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        // Its a reference or it is related to another data model
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false,
});

export default model('User', userSchema);