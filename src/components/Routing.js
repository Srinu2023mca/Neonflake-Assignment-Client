import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import UploadPage from './UploadPage';
import ListingPage from './ListingPage';
import VideoDisplayPage from "./VideoDisplayPage"
import NotFound from './NotFound';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="/videodisplay/:id" element={<VideoDisplayPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
