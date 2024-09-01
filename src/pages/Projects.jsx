import { useState } from "react";
import FormInput from "../components/FormInput";

export default function Projects() {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');    
    
    return (
        <div className="bg-gray-900 h-full w-full text-white p-6">
            <div className="flex flex-col w-full h-auto gap-3">
                <div className="grid w-full grid-cols-2 gap-5">
                    <FormInput title="Project Name" type="text" value={title} onChange={setTitle} />
                    <FormInput title="Project URL" type="text" value={url} onChange={setUrl} />
                    <FormInput title="Project Description" type="text" value={description} onChange={setDescription} />
                    <FormInput title="Project Image" type="text" value={image} onChange={setImage} />
                </div>
            </div>
        </div>
    );
}
