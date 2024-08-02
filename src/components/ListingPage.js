import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListingPage() {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
            const response = await axios.get('https://neonflake-assignment-server-1.onrender.com/api/media');
            setMediaList(response.data);
        };
        fetchMedia();
    }, []);

    return (
        <div className='list-main'>
            <h2 className='py-3 mb-4 bg-primary text-light'>Media List</h2>
            <ul className='row'>
                {mediaList.map(media => (
                    <li key={media._id} className='col-sm cut-border'>
                        
                        <Link to={`/videodisplay/${media._id}`} className='text-decoration-none thumbnail'>
                        <p className='fw-semibold my-3'>{media.title}</p>
                            <img src={media.thumbnailUrl} alt={media.title} width={300} height={200} className='border border-primary rounded'/>
                            <button className='btn btn-warning my-3 py-1 px-3'>
                            
                            <span className='px-2'>Watch Now</span><i className="bi bi-caret-left-square-fill"></i> </button>
                        </Link>
                        

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListingPage;
