import React from 'react';

const GalleryItem = ({ image, onImageClick }) => (
  <li>
    {image && (
      <img
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}.jpg`}
        alt={image.title}
        onClick={() => onImageClick(`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}.jpg`)}
      />
    )}
  </li>
);

export default GalleryItem;