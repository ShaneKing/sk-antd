import {Input} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import SKInput from './SKInput';

Input.Search.defaultProps = SK.assign({}, {
  enterButton: false
}, Input.defaultProps, Input.Search.defaultProps, {});

Input.Search.propTypes = SK.assign({}, {
  enterButton: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onSearch: PropTypes.func
}, Input.propTypes, Input.Search.propTypes, {});

export default class SKSearch extends SKInput {
  static defaultProps = SK.assign({}, SKInput.defaultProps, Input.Search.defaultProps, {
    compTag: Input.Search
  });
  static propTypes = SK.assign({}, SKInput.propTypes, Input.Search.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKSearch';
  }
}
