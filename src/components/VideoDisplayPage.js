import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function VideoPage() {
    const { id } = useParams();
    const [media, setMedia] = useState(null);

    useEffect(() => {
        console.log("ID :", id)
        console.log('Navigated to video page with ID:', id);
        const fetchMedia = async () => {
            const response = await axios.get(`http://localhost:5000/api/media/${id}`);
            setMedia(response.data);
        };
        fetchMedia();
    }, [id]);

    if (!media) return <div>Loading...</div>;

    return (
        <div className='video-main'>
            <div className='window'>
            <h2 className='text-light my-3'>{media.title}</h2>
            <video controls autoPlay className='video'>
                <source src={media.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className='description text-light'>{media.description}</p>
            <Link className='btn btn-primary px-3 py-1 fs-5' to="/">
            <i class="bi bi-arrow-left-circle"></i>
            <span className='px-2'>Back</span></Link>
            </div>
            
        </div>
    );
}

export default VideoPage;
