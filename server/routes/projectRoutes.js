import express from 'express';
import multer from 'multer';
import projectModel from '../models/projectModel.js';

const projectRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

projectRouter.post(
    '/saveProject',
    upload.single('imageFile'),
    async (req, res) => {
        try {
            const { title, url, description } = req.body;
            const imagePath = req.file ? req.file.path : null;

            const newProject = new projectModel({
                title,
                url,
                description,
                image: imagePath,
            });

            await newProject.save();
            res.status(201).json({ message: 'Project saved successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error saving project' });
        }
    }
);

export default projectRouter;
