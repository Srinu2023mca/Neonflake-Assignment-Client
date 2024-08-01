import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        <div>
            <h2>{media.title}</h2>
            <video controls autoPlay>
                <source src={media.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>{media.description}</p>
        </div>
    );
}

export default VideoPage;
