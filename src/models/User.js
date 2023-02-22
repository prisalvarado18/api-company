import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

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

// Statics hace referencia a crear metodos estaticos
// Forma de llamar a un objeto sin necesidad de instanciarlo
// Este metodo va a recibir una contrasena y la va a cifrar
userSchema.statics.encryptPassword = async (password) => {
    // Importo bcrypt
    // Import genSalt: es una manera de aplicar un algoritmo
    // y aqui le decimos la cantidad de veces que lo aplicará
    // A más # de veces, más se ejecuta el algoritmo 
    // y más recursos consumirá el servidor
    const salt = await bcrypt.genSalt(10);
    // password es la contraseña que está tipeando
    return await bcrypt.hash(password, salt);
}

// Este metodo recibe dos contrasenas
// Un password guardado
// Un password para comparar 
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}


export default model('User', userSchema);