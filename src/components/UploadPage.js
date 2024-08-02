import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail);
    formData.append("video", video);

    try {
      const response = await axios.post(
        "https://neonflake-assignment-server-1.onrender.com/api/media",
        formData
      );
      toast.success("Video Upload successfully");
      console.log("Upload successful:", response.data);
      setTitle('');
      setDescription("");
      setThumbnail(null);
      setVideo(null);
    } catch (error) {
      console.log(error);
      toast.error("Error Uploading Video ");
    }
  };

  return (
    <div className="main">
      <div className="form">
        <h2 className="fs-bold text-light">Upload Media</h2>
        <div className="alignment">
          <label className="fw-semibold text-dark">Title :</label>
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            maxLength="50"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="fw-semibold text-dark">Description:</label>
          <textarea
            className="form-control"
            placeholder="Description"
            maxLength="200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="fw-semibold text-dark">Thumbnail:</label>
          <input
            className="form-control"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <label className="fw-semibold text-dark">Video:</label>
          <input
            className="form-control"
            type="file"
            accept="video/mp4,video/avi,video/mpg"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <div className="w-100">
          <button className="upload-btn" onClick={handleUpload}>
          <i className="bi bi-cloud-arrow-up "></i>
          <span className="mx-2">Upload</span>
          </button>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UploadPage;
