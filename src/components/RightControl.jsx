import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function RightControl({ curImgIdx, updateImageIdx }) {
  return (
    <div>
      <RightOutlined
        style={{ fontSize: '32px' }}
        onClick={() => updateImageIdx(curImgIdx + 1)}
      />
    </div>
  );
}

RightControl.propTypes = {
  curImgIdx: PropTypes.number.isRequired,
  updateImageIdx: PropTypes.func.isRequired,
};
