import express from 'express';
import projectModel from '../models/projectModel.js';

const projectRouter = express.Router();

projectRouter.post('/saveProject', async (req, res) => {
    try {
        const { title, url, description, image } = req.body;

        const newProject = new projectModel({
            title,
            url,
            description,
            image,
        });

        await newProject.save();
        res.status(201).json({ message: 'Project saved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error saving project' });
    }
});

export default projectRouter;
