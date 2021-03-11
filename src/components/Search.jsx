import React from 'react';
import {
  Row, Col, Input, Button,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function Search({ setSearchKey, onClick }) {
  function goSearch() {
    let val = document.querySelector('.search-input-box').value;
    val = `${val}`.trim();
    if (val === null || val === '') {
      return;
    }
    setSearchKey(val);
    onClick();
  }

  return (
    <Row className="search-bar">
      <Col span={6} offset={8}>
        <Input className="search-input-box" placeholder="Ex. Halloween" size="large" />
      </Col>
      <Col span={1}>
        <Button icon={<SearchOutlined />} onClick={goSearch} size="large">
          Search
        </Button>
      </Col>
    </Row>
  );
}

Search.propTypes = {
  setSearchKey: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
