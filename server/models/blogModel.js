import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });

export default models.blogs || model('blogs', BlogSchema);