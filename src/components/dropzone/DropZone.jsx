import React from 'react';
import './DropZone.css';

export default function DropZone() {
  return (
    <div className='drop-container'>
      <div className='drop-message'>
        <div className='upload-icon'></div>
        Drag & Drop files here or click to upload
      </div>
    </div>
  );
}
