import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function LeftControl({ curImgIdx, updateImageIdx }) {
  return (
    <div className="control-arrow">
      <LeftOutlined
        style={{ fontSize: '32px' }}
        onClick={() => updateImageIdx(curImgIdx - 1)}
      />
    </div>
  );
}

LeftControl.propTypes = {
  curImgIdx: PropTypes.number.isRequired,
  updateImageIdx: PropTypes.func.isRequired,
};
