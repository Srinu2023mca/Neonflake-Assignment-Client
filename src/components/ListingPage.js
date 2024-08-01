import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListingPage() {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
            const response = await axios.get('http://localhost:5000/api/media');
            setMediaList(response.data);
        };
        fetchMedia();
    }, []);

    return (
        <div>
            <h2>Media List</h2>
            <ul>
                {mediaList.map(media => (
                    <li key={media._id}>
                        <Link to={`/videodisplay/${media._id}`}>
                            <img src={media.thumbnailUrl} alt={media.title} />
                            <p>{media.title}</p>
                            
                        </Link>
                        <Link to={`/videodisplay/${media._id}`}>Watch Video</Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListingPage;
