import {Input} from 'antd';
import _ from 'lodash';
import React from 'react';
import SK from 'sk-js';
import SKInput from './SKInput';

export default class SKSearch extends SKInput {
  static defaultProps = SK.assign({}, Input.Search.defaultProps, {
    compTag: Input.Search
  });
  static propTypes = SK.assign({}, SKInput.propTypes, Input.Search.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
