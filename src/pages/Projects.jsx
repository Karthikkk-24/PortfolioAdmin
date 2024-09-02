import axios from "axios";
import { useState } from "react";
import BaseURL from "../components/BaseURL";
import FormInput from "../components/FormInput";

export default function Projects() {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');    

    const handleSubmit = () => {
        if (title === '' || url === '' || description === '' || image === '') {
            alert('All fields are required');
            return;
        }

        console.log(title, url, description, image);

        try {
            const response = axios.post(`${BaseURL()}/api/projects/saveProject`, {
                title,
                url,
                description,
                image
            });

            if (response.status === 201) {
                alert('Project saved successfully');
                setTitle('');
                setUrl('');
                setDescription('');
                setImage('');
            } else {
                alert('Something went wrong');
            }

        } catch (error) {
            console.log(error);
        }
        
    }
    
    return (
        <div className="bg-gray-900 h-full w-full text-white p-6">
            <div className="flex flex-col w-full h-auto gap-3">
                <div className="grid w-full grid-cols-2 gap-5">
                    <FormInput title="Project Name" type="text" value={title} onChange={setTitle} />
                    <FormInput title="Project URL" type="text" value={url} onChange={setUrl} />
                    <FormInput title="Project Description" type="text" value={description} onChange={setDescription} />
                    <FormInput title="Project Image" type="text" value={image} onChange={setImage} />
                </div>
                <button onClick={handleSubmit} className="w-full bg-gray-600 text-white p-2 rounded-2xl hover:bg-gray-700">Save</button>
            </div>
        </div>
    );
}
