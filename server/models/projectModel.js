import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

const projectModel = mongoose.model('Project', projectSchema);

export default projectModel;
