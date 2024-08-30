import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const AuthTokenSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
}, { timestamps: true });

export default models.AuthTokenCollection || model('AuthTokenCollection', AuthTokenSchema);
