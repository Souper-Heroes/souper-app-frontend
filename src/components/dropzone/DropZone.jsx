import React, { useState, useRef } from 'react';
import './DropZone.css';

function DropZone() {
  const [selectedFile, setSelectedFile] = useState([]);
  const fileInputRef = useRef();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const handleFiles = (files) => {
    if (validateFile(files[0])) {
      setSelectedFile(files[0]);
      // Upload the file to the DB and display here
    }
    // ## TODO - tell the user the file is invalid
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };
  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  return (
    <div className='container'>
      <div
        className='drop-container'
        onClick={fileInputClicked}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <img src={selectedFile.name} alt='' className='display-image' />
        <div className='drop-message'>
          <input
            ref={fileInputRef}
            className='file-input'
            type='file'
            multiple
            onChange={filesSelected}
          />
          <div className='upload-icon' />
          Drag & Drop files here or click to upload
        </div>
      </div>
    </div>
  );
}
export default DropZone;
