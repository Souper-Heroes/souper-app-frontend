import React, { useState } from 'react';
import './DropZone.css';

function DropZone() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        // add a new property called invalid
        files[i]['invalid'] = true;
        // add to the same array so we can display the name of the file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        // set error message
        setErrorMessage('File type not permitted');
      }
    }
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };
  return (
    <div className='container'>
      <div
        className='drop-container'
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className='drop-message'>
          <div className='upload-icon'></div>
          Drag & Drop files here or click to upload
        </div>
      </div>
      <div className='file-display-container'>
        <div className='file-status-bar'>
          <div>
            <div className='file-type-logo'></div>
            <div className='file-type'>png</div>
            <span className='file-name'>test-file.png</span>
            <span className='file-size'>(20.5 KB)</span>
            {
              <span className='file-error-message'>
                (File type not permitted)
              </span>
            }
          </div>
          <div className='file-remove'>X</div>
        </div>
      </div>
    </div>
  );
}
export default DropZone;
