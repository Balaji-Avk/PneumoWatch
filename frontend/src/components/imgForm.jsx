import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ImgForm() {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      console.log("no file selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);

    axios
      .post("https://balajiavk.pythonanywhere.com/predict", fd, {
        onUploadProgress: (progressEvent) =>
          console.log(progressEvent.progress * 100),
      })
      .then((res) => {
        console.log(res.data.prediction);
        localStorage.setItem("resultVal", res.data.prediction);
        navigate("/predict");
      })
      .catch((err) => console.error(err));
    console.log();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="imgf">
      <>
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <label htmlFor="file-input" className="custom-file-upload">
          Choose File
        </label>
        <span className="file-name">{filename}</span>
        <button type="submit" onClick={handleUpload} className="upload-btn">
          Upload
        </button>
      </>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}
