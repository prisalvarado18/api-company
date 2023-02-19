import { Schema, model } from 'mongoose';

const productSchema = new Schema ({
    name: String,
    category: String,
    price: Number, 
    imgURL: String
}, {
    // Se añaden los campos:
    // Fecha de creación
    // Última fecha de actualización
    timestamps: true,
    // Cada vez que se crea un doc no aparezca
    // --v
    versionKey: false
});

// We've got to export this model
export default model('Product', productSchema);