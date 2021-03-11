import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ImageDisplay({ curImgIdx, images }) {
  useEffect(() => {
    const parent = document.querySelector('.ImgViwer a');
    const child = document.querySelector('.ImgViwer a img');
    parent.removeChild(child);
    const newElement = document.createElement('img');
    newElement.src = images[curImgIdx].urls.regular;
    newElement.classList.add('hvrbox-layer_bottom');
    newElement.alt = images[curImgIdx].alt_description;
    parent.insertBefore(newElement, parent.firstChild);
  });
  return (
    <div className="ImgViwer content">
      <a href={images[curImgIdx].urls.full} target="_blank" rel="noreferrer">
        <img alt="from the url src" />
      </a>
    </div>
  );
}

ImageDisplay.propTypes = {
  curImgIdx: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
