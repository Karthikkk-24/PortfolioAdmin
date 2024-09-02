import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import projectModel from "../models/projectModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRouter = express.Router();

projectRouter.post('/saveProject', async (req, res) => {
    try {
        const { title, url, description, imageFile } = req.body;

        // Convert the image file to base64 format
        const imagePath = path.join(__dirname, '../uploads', imageFile.name);
        fs.writeFileSync(imagePath, imageFile.data, 'base64');

        const newProject = new projectModel({
            title,
            url,
            description,
            image: imagePath
        });

        await newProject.save();
        res.status(201).json({ message: 'Project saved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error saving project' });
    }
});

export default projectRouter;