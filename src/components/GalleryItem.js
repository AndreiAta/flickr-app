import React from 'react';

const GalleryItem = ({ image }) => (
  <li>
    {image && (
      <img
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}.jpg`}
        alt={image.title}
      />
    )}
  </li>
);

export default GalleryItem;