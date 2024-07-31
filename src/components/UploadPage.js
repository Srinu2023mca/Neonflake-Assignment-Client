import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [video, setVideo] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnail', thumbnail);
        formData.append('video', video);

        try {
            const response = await axios.post('http://localhost:5000/api/media', formData);
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Error uploading:', error);
        }
    };

    return (
        <div className='main'>
            <form className='form'>
            <h2 className='fs-bold'>Upload Media</h2>
            <div className='alignment'>
                <label className='fs-bold'>Title :</label>
            <input 
            className='form-control'
                type="text" 
                placeholder="Title" 
                maxLength="50" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <label className='fs-bold'>Description:</label>
            <textarea 
            className='form-control'
                placeholder="Description" 
                maxLength="200" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <label>Image:</label>
            <input 
            className='form-control'
                type="file" 
                accept="image/png, image/jpeg" 
                onChange={(e) => setThumbnail(e.target.files[0])} 
            />
            <label>Video:</label>
            <input 
            className='form-control'
                type="file" 
                accept="video/mp4,video/avi,video/mpg" 
                onChange={(e) => setVideo(e.target.files[0])} 
            />
            <button className='btn btn-primary' onClick={handleUpload}>Upload</button>
            </div>
            </form>
        </div>
    );
}

export default UploadPage;
