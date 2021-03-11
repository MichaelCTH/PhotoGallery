import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';

export default function SnapView({ curImgIdx, images, updateImageIdx }) {
  return (
    <Row type="flex" justify="space-around" align="middle" className="snap-view">
      {images.map((element, idx) => (
        <img
          className={curImgIdx === idx ? 'img-select' : 'img-unselect'}
          key={element.id}
          alt={element.alt_description}
          src={element.urls.thumb}
          onClick={() => updateImageIdx(idx)}
          onKeyDown={() => { }}
          role="presentation"
        />
      ))}
    </Row>
  );
}

SnapView.propTypes = {
  curImgIdx: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateImageIdx: PropTypes.func.isRequired,
};
