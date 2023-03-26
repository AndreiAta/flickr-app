import React from 'react';
import GalleryItem from './GalleryItem.js';

const Gallery = ({ images }) => (
  <ul>
    {images.map(image => {
      return <GalleryItem key={image.id} image={image} />;
    })}
  </ul>
);

export default Gallery;