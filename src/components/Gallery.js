import React from 'react';
import GalleryItem from './GalleryItem.js';

const Gallery = ({ images, onImageClick }) => (
  <ul>
    {images.map(image => {
      return <GalleryItem key={image.id} image={image} onImageClick={onImageClick} />;
    })}
  </ul>
);

export default Gallery;