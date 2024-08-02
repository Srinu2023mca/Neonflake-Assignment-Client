
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ListingPage from "./components/ListingPage";
import UploadPage from './components/UploadPage';
import VideoDisplayPage from "./components/VideoDisplayPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="/videodisplay/:id" element={<VideoDisplayPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
