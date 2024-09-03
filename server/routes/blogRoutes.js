import express from "express";
import blogModel from "../models/blogModel.js";

const blogRouter = express.Router();

blogRouter.post('/saveBlog', async (req, res) => {
    try {
        const { title, url, description, image } = req.body;

        const newProject = new blogModel({
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

export default blogRouter;