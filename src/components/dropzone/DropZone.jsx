import React, { useState, useRef } from 'react';
import './DropZone.css';

function DropZone() {
  const fileInputRef = useRef();

  const dragOver = e => {
    e.preventDefault();
  };
  const dragEnter = e => {
    e.preventDefault();
  };
  const dragLeave = e => {
    e.preventDefault();
  };

  const validateFile = file => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const fileDrop = e => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };
  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const fileSelected = event => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const [imgData, setImgData] = useState(null);

  const handleFiles = files => {
    if (validateFile(files[0])) {
      //setPicture(files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(files[0]);
    }
    // ## TODO - tell the user the file is invalid
  };

  return (
    <div className="container">
      <div
        className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInputClicked}
      >
        <div>
          {(imgData && (
            <img className="food-img-container" src={imgData} />
          )) || (
            <div className="drop-message">
              <div className="upload-icon" />
              <input
                ref={fileInputRef}
                className="file-input"
                type="file"
                multiple
                onChange={fileSelected}
              />
              Drag & Drop files here or click to upload
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default DropZone;
